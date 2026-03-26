"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "@/components/Icon";
import type { Location } from "@/data/locations";

// Fix default marker icons for Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Dynamic imports for react-leaflet (SSR-incompatible)
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

/* ─── Types ─── */

interface LocationExplorerProps {
  locations: Location[];
  type: "summer" | "spring";
  locale: string;
}

/* ─── Constants ─── */

const SUMMER_REGIONS = [
  "All Locations",
  "West Island",
  "Montreal",
  "Off Island",
  "Ontario",
] as const;

const SPRING_REGIONS = ["All Locations", "Quebec", "Ontario"] as const;

const REGION_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  "West Island": {
    bg: "bg-blue-light",
    text: "text-blue-dark",
    dot: "bg-blue",
  },
  Montreal: {
    bg: "bg-coral-light",
    text: "text-coral-dark",
    dot: "bg-coral",
  },
  "Off Island": {
    bg: "bg-mint-light",
    text: "text-mint-dark",
    dot: "bg-mint",
  },
  Ontario: {
    bg: "bg-sunshine-light",
    text: "text-sunshine-dark",
    dot: "bg-sunshine",
  },
  Quebec: {
    bg: "bg-violet-light",
    text: "text-violet",
    dot: "bg-violet",
  },
};

const DEFAULT_CENTER: [number, number] = [45.5017, -73.5673];

/* Region bounding boxes for zoom-to-region */
const REGION_BOUNDS: Record<string, [[number, number], [number, number]]> = {
  "West Island": [
    [45.39, -73.95],
    [45.52, -73.78],
  ],
  Montreal: [
    [45.44, -73.65],
    [45.58, -73.52],
  ],
  "Off Island": [
    [45.38, -73.95],
    [45.62, -73.42],
  ],
  Ontario: [
    [43.7, -75.8],
    [45.5, -73.3],
  ],
  Quebec: [
    [45.38, -73.92],
    [45.58, -73.52],
  ],
};

/* ─── Component ─── */

export default function LocationExplorer({
  locations,
  type,
  locale,
}: LocationExplorerProps) {
  const [mounted, setMounted] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string>("All Locations");
  const [compareList, setCompareList] = useState<string[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const regions = type === "summer" ? SUMMER_REGIONS : SPRING_REGIONS;
  const defaultZoom = type === "summer" ? 9 : 10;
  const basePath =
    type === "summer"
      ? `/${locale}/summer-camp/locations`
      : `/${locale}/spring-break/locations`;

  /* Filtered locations */
  const filteredLocations = useMemo(() => {
    if (activeRegion === "All Locations") return locations;
    return locations.filter((loc) => loc.region === activeRegion);
  }, [locations, activeRegion]);

  /* Map bounds for filtered locations */
  const mapBounds = useMemo((): [[number, number], [number, number]] | null => {
    if (activeRegion !== "All Locations" && REGION_BOUNDS[activeRegion]) {
      return REGION_BOUNDS[activeRegion];
    }
    if (filteredLocations.length === 0) return null;
    const lats = filteredLocations.filter((l) => l.lat).map((l) => l.lat);
    const lngs = filteredLocations.filter((l) => l.lng).map((l) => l.lng);
    if (lats.length === 0) return null;
    return [
      [Math.min(...lats) - 0.05, Math.min(...lngs) - 0.05],
      [Math.max(...lats) + 0.05, Math.max(...lngs) + 0.05],
    ];
  }, [filteredLocations, activeRegion]);

  /* Compare helpers */
  const toggleCompare = useCallback((slug: string) => {
    setCompareList((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 3) return prev; // max 3
      return [...prev, slug];
    });
  }, []);

  const comparedLocations = useMemo(
    () => locations.filter((l) => compareList.includes(l.slug)),
    [locations, compareList]
  );

  /* ─── Render ─── */

  return (
    <div className="relative">
      {/* ─── Region Filter Bar ─── */}
      <div className="mb-6 flex flex-wrap gap-2">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeRegion === region
                ? "bg-blue text-white shadow-[var(--shadow-blue)]"
                : "bg-white text-text-body border border-[var(--border)] hover:border-blue hover:text-blue"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* ─── Main Layout: Map + Cards ─── */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ─── Map Section ─── */}
        <div className="w-full lg:w-[55%] flex-shrink-0">
          <div
            className="rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] border border-[var(--border)] bg-gray-100"
            style={{ height: "400px" }}
          >
            <style>{`
              @media (min-width: 1024px) {
                .location-explorer-map { height: 500px !important; }
              }
            `}</style>
            {mounted ? (
              <MapContainer
                center={DEFAULT_CENTER}
                zoom={defaultZoom}
                scrollWheelZoom={false}
                className="location-explorer-map"
                style={{ height: "100%", width: "100%" }}
                key={activeRegion} // re-mount on region change to reset bounds
                bounds={mapBounds ?? undefined}
                boundsOptions={{ padding: [30, 30] }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {filteredLocations
                  .filter((loc) => loc.lat && loc.lng)
                  .map((loc) => (
                    <Marker
                      key={loc.slug}
                      position={[loc.lat, loc.lng]}
                    >
                      <Popup>
                        <div className="min-w-[200px] p-1">
                          <p className="font-bold text-base text-navy mb-1 font-[var(--font-nunito)]">
                            {loc.name}
                          </p>
                          {loc.venue && (
                            <p className="text-sm text-text-muted mb-0.5">
                              {loc.venue}
                            </p>
                          )}
                          {loc.address && (
                            <p className="text-xs text-text-muted mb-2">
                              {loc.address}
                            </p>
                          )}
                          <p className="text-lg font-bold text-blue mb-2">
                            {loc.earlyBirdPrice}{" "}
                            <span className="text-xs font-normal text-text-muted">
                              early bird
                            </span>
                          </p>
                          <Link
                            href={`${basePath}/${loc.slug}`}
                            className="inline-block px-4 py-2 text-sm font-bold text-white bg-blue rounded-[var(--radius-xs)] hover:bg-blue-dark transition-colors"
                          >
                            View Details
                          </Link>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            ) : (
              <div className="h-full w-full flex items-center justify-center text-text-muted">
                <Icon name="map-pin" size={24} className="mr-2 opacity-40" />
                Loading map...
              </div>
            )}
          </div>
        </div>

        {/* ─── Location Cards Grid ─── */}
        <div className="w-full lg:w-[45%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {filteredLocations.map((loc) => {
              const regionStyle = REGION_COLORS[loc.region] ?? {
                bg: "bg-gray-100",
                text: "text-text-body",
                dot: "bg-gray-300",
              };
              const isCompared = compareList.includes(loc.slug);

              return (
                <div
                  key={loc.slug}
                  className="bg-white rounded-[var(--radius-lg)] p-5 shadow-[var(--shadow-sm)] border border-[var(--border)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)] flex flex-col"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-navy font-[var(--font-nunito)] leading-tight">
                      {loc.name}
                    </h3>
                    <span
                      className={`flex-shrink-0 ml-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${regionStyle.bg} ${regionStyle.text}`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${regionStyle.dot}`}
                      />
                      {loc.region}
                    </span>
                  </div>

                  {/* Venue & Address */}
                  {loc.venue && (
                    <p className="text-sm text-text-body mb-0.5 flex items-center gap-1.5">
                      <Icon
                        name="building"
                        size={14}
                        className="text-text-muted flex-shrink-0"
                      />
                      {loc.venue}
                    </p>
                  )}
                  {loc.address && (
                    <p className="text-xs text-text-muted mb-3 flex items-center gap-1.5">
                      <Icon
                        name="map-pin"
                        size={14}
                        className="text-text-muted flex-shrink-0"
                      />
                      {loc.address}
                    </p>
                  )}

                  {/* Pricing */}
                  <div className="mb-3">
                    <span className="text-xl font-bold text-blue">
                      {loc.earlyBirdPrice}
                    </span>
                    {loc.earlyBirdPrice !== loc.regularPrice && (
                      <span className="ml-2 text-sm text-text-muted line-through">
                        {loc.regularPrice}
                      </span>
                    )}
                    {loc.earlyBirdPrice !== loc.regularPrice && (
                      <span className="ml-1.5 text-xs font-bold text-mint-dark bg-mint-light px-2 py-0.5 rounded-full">
                        Early Bird
                      </span>
                    )}
                  </div>

                  {/* Dates */}
                  <p className="text-sm text-text-body mb-3 flex items-center gap-1.5">
                    <Icon
                      name="calendar"
                      size={14}
                      className="text-text-muted flex-shrink-0"
                    />
                    {loc.dates}
                  </p>

                  {/* Highlights (max 3) */}
                  <ul className="space-y-1 mb-3 flex-1">
                    {loc.highlights.slice(0, 3).map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-text-body flex items-start gap-2"
                      >
                        <Icon
                          name="check-circle"
                          size={15}
                          className="text-mint flex-shrink-0 mt-0.5"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Holiday Note */}
                  {loc.holidayNote && (
                    <div className="mb-3 p-3 rounded-[var(--radius-xs)] bg-sunshine-light border border-sunshine/30">
                      <p className="text-xs text-sunshine-dark leading-relaxed">
                        <Icon
                          name="info"
                          size={13}
                          className="inline mr-1 -mt-0.5"
                        />
                        {loc.holidayNote}
                      </p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-2 mt-auto pt-2">
                    <Link
                      href={`${basePath}/${loc.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-[var(--radius-xs)] border-2 border-gray-200 text-text-primary hover:border-blue hover:text-blue transition-all duration-300"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => toggleCompare(loc.slug)}
                      disabled={!isCompared && compareList.length >= 3}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-[var(--radius-xs)] transition-all duration-300 ${
                        isCompared
                          ? "bg-blue text-white shadow-[var(--shadow-blue)]"
                          : compareList.length >= 3
                            ? "bg-gray-100 text-text-muted cursor-not-allowed"
                            : "bg-blue-light text-blue-dark hover:bg-blue hover:text-white"
                      }`}
                    >
                      <Icon
                        name={isCompared ? "check-circle" : "clipboard"}
                        size={14}
                      />
                      {isCompared ? "Added" : "Compare"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredLocations.length === 0 && (
            <div className="text-center py-16 text-text-muted">
              <Icon name="search" size={32} className="mx-auto mb-3 opacity-40" />
              <p className="font-bold">No locations found in this region.</p>
            </div>
          )}
        </div>
      </div>

      {/* ─── Comparison Drawer (sticky bottom bar) ─── */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[var(--border)] shadow-[0_-4px_24px_rgba(15,29,53,0.1)] px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <p className="text-sm font-bold text-navy">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue text-white text-xs mr-2">
                {compareList.length}
              </span>
              location{compareList.length !== 1 ? "s" : ""} selected
              <span className="text-text-muted font-normal ml-1">
                (max 3)
              </span>
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCompareList([])}
                className="px-4 py-2 text-sm font-bold text-text-muted hover:text-coral transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setShowComparison(true)}
                className="px-6 py-2.5 text-sm font-bold text-white bg-blue rounded-[var(--radius-xs)] shadow-[var(--shadow-blue)] hover:bg-blue-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                Compare Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── Comparison Modal ─── */}
      {showComparison && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={() => setShowComparison(false)}
          />

          {/* Modal Panel */}
          <div className="relative w-full h-full lg:h-auto lg:max-h-[85vh] lg:max-w-4xl lg:mx-4 bg-white lg:rounded-[var(--radius-lg)] shadow-[var(--shadow-xl)] overflow-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-[var(--border)] px-5 py-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy font-[var(--font-nunito)]">
                Compare Locations
              </h2>
              <button
                onClick={() => setShowComparison(false)}
                className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-text-muted hover:text-navy"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M4 4l8 8M12 4l-8 8" />
                </svg>
              </button>
            </div>

            {/* Comparison Table */}
            <div className="p-5 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left py-3 pr-4 text-text-muted font-bold uppercase text-xs tracking-wide w-[140px]">
                      &nbsp;
                    </th>
                    {comparedLocations.map((loc) => (
                      <th
                        key={loc.slug}
                        className="text-left py-3 px-4 font-bold text-navy font-[var(--font-nunito)] text-base"
                      >
                        {loc.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Venue */}
                  <ComparisonRow label="Venue" locations={comparedLocations}>
                    {(loc) => loc.venue || "—"}
                  </ComparisonRow>

                  {/* Region */}
                  <ComparisonRow label="Region" locations={comparedLocations}>
                    {(loc) => {
                      const style = REGION_COLORS[loc.region];
                      return style ? (
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${style.bg} ${style.text}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${style.dot}`}
                          />
                          {loc.region}
                        </span>
                      ) : (
                        loc.region
                      );
                    }}
                  </ComparisonRow>

                  {/* Dates */}
                  <ComparisonRow label="Dates" locations={comparedLocations}>
                    {(loc) => loc.dates}
                  </ComparisonRow>

                  {/* Early Bird Price */}
                  <ComparisonRow
                    label="Early Bird Price"
                    locations={comparedLocations}
                  >
                    {(loc) => (
                      <span className="font-bold text-blue">
                        {loc.earlyBirdPrice}
                      </span>
                    )}
                  </ComparisonRow>

                  {/* Regular Price */}
                  <ComparisonRow
                    label="Regular Price"
                    locations={comparedLocations}
                  >
                    {(loc) => (
                      <span className="text-text-muted">
                        {loc.regularPrice}
                      </span>
                    )}
                  </ComparisonRow>

                  {/* Extended Care */}
                  <ComparisonRow
                    label="Extended Care"
                    locations={comparedLocations}
                  >
                    {(loc) => loc.extendedCare}
                  </ComparisonRow>

                  {/* Lunch */}
                  <ComparisonRow label="Lunch" locations={comparedLocations}>
                    {(loc) =>
                      loc.lunchAvailable ? (
                        <span className="text-mint-dark font-bold">
                          Available
                        </span>
                      ) : (
                        <span className="text-text-muted">Not available</span>
                      )
                    }
                  </ComparisonRow>

                  {/* Holiday Notes */}
                  <ComparisonRow
                    label="Holiday Notes"
                    locations={comparedLocations}
                  >
                    {(loc) =>
                      loc.holidayNote ? (
                        <span className="text-xs leading-relaxed">
                          {loc.holidayNote}
                        </span>
                      ) : (
                        "—"
                      )
                    }
                  </ComparisonRow>

                  {/* Highlights */}
                  <ComparisonRow
                    label="Highlights"
                    locations={comparedLocations}
                  >
                    {(loc) => (
                      <ul className="space-y-1">
                        {loc.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <Icon
                              name="check-circle"
                              size={13}
                              className="text-mint flex-shrink-0 mt-0.5"
                            />
                            <span className="text-xs">{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </ComparisonRow>
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-white border-t border-[var(--border)] px-5 py-4 flex justify-end gap-3">
              <button
                onClick={() => setShowComparison(false)}
                className="px-6 py-2.5 text-sm font-bold text-text-muted hover:text-navy border-2 border-gray-200 rounded-[var(--radius-xs)] transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Comparison Table Row Helper ─── */

function ComparisonRow({
  label,
  locations,
  children,
}: {
  label: string;
  locations: Location[];
  children: (loc: Location) => React.ReactNode;
}) {
  return (
    <tr className="border-t border-[var(--border)]">
      <td className="py-3 pr-4 text-text-muted font-bold text-xs uppercase tracking-wide align-top whitespace-nowrap">
        {label}
      </td>
      {locations.map((loc) => (
        <td
          key={loc.slug}
          className="py-3 px-4 text-text-body align-top"
        >
          {children(loc)}
        </td>
      ))}
    </tr>
  );
}
