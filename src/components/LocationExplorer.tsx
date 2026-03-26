"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "@/components/Icon";
import type { Location } from "@/data/locations";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const MapContainer = dynamic(() => import("react-leaflet").then((m) => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((m) => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), { ssr: false });

interface Props {
  locations: Location[];
  type: "summer" | "spring";
  locale: string;
}

export default function LocationExplorer({ locations, type, locale }: Props) {
  const [mounted, setMounted] = useState(false);
  const [activeRegion, setActiveRegion] = useState("all");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  useEffect(() => { setMounted(true); }, []);

  const regions = useMemo(() => {
    const unique = [...new Set(locations.map((l) => l.region))];
    return ["all", ...unique];
  }, [locations]);

  const filtered = useMemo(() => {
    if (activeRegion === "all") return locations;
    return locations.filter((l) => l.region === activeRegion);
  }, [locations, activeRegion]);

  // Map bounds for filtered locations
  const bounds = useMemo(() => {
    if (filtered.length === 0) return undefined;
    const lats = filtered.map((l) => l.lat);
    const lngs = filtered.map((l) => l.lng);
    return L.latLngBounds(
      [Math.min(...lats) - 0.05, Math.min(...lngs) - 0.1],
      [Math.max(...lats) + 0.05, Math.max(...lngs) + 0.1]
    );
  }, [filtered]);

  const basePath = type === "summer" ? "summer-camp" : "spring-break";

  return (
    <div className="space-y-6">
      {/* Region Filter */}
      <div className="flex flex-wrap gap-2 justify-center">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={`text-[13px] font-bold px-4 py-2 rounded-full border transition-all ${
              activeRegion === region
                ? "bg-blue text-white border-blue shadow-[var(--shadow-blue)]"
                : "bg-white text-text-body border-[var(--border)] hover:border-blue/30"
            }`}
          >
            {region === "all" ? (locale === "fr" ? "Tous" : "All") : region}
            <span className="ml-1.5 text-[11px] opacity-60">
              {region === "all"
                ? locations.length
                : locations.filter((l) => l.region === region).length}
            </span>
          </button>
        ))}
      </div>

      {/* Map */}
      {mounted && bounds && (
        <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-sm)]">
          <MapContainer
            key={activeRegion}
            bounds={bounds}
            scrollWheelZoom={false}
            style={{ height: "380px", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filtered.map((loc) => (
              <Marker key={loc.slug} position={[loc.lat, loc.lng]}>
                <Popup>
                  <div className="font-[var(--font-dm-sans)] min-w-[180px]">
                    <p className="font-bold text-[14px] text-navy mb-0.5">{loc.name}</p>
                    {loc.venue && <p className="text-[12px] text-text-muted mb-1">{loc.venue}</p>}
                    <p className="text-[15px] font-black text-blue mb-2">{loc.earlyBirdPrice}</p>
                    <Link
                      href={`/${locale}/${basePath}/locations/${loc.slug}`}
                      className="text-[12px] font-bold text-blue hover:underline"
                    >
                      {locale === "fr" ? "Voir les détails →" : "View Details →"}
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}

      {/* Location List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((loc) => (
          <Link
            key={loc.slug}
            href={`/${locale}/${basePath}/locations/${loc.slug}`}
            onMouseEnter={() => setHoveredSlug(loc.slug)}
            onMouseLeave={() => setHoveredSlug(null)}
            className={`group flex items-center gap-4 bg-white rounded-[var(--radius-md)] p-4 border transition-all duration-200 ${
              hoveredSlug === loc.slug
                ? "border-blue/30 shadow-[var(--shadow-md)] -translate-y-0.5"
                : "border-[var(--border)] shadow-[var(--shadow-xs)]"
            }`}
          >
            {/* Pin icon */}
            <div className="w-10 h-10 rounded-xl bg-blue/8 flex items-center justify-center shrink-0 group-hover:bg-blue/15 transition-colors">
              <Icon name="map-pin" size={18} className="text-blue" />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[14px] font-bold text-navy truncate">{loc.name}</span>
                <span className="text-[11px] font-semibold text-text-muted bg-gray-100 px-2 py-0.5 rounded-full shrink-0">{loc.region}</span>
              </div>
              {loc.venue && (
                <p className="text-[12px] text-text-muted truncate">{loc.venue}</p>
              )}
              <p className="text-[12px] text-text-muted">{loc.dates}</p>
            </div>

            {/* Price */}
            <div className="text-right shrink-0">
              <div className="text-[16px] font-black text-blue">{loc.earlyBirdPrice}</div>
              {loc.earlyBirdPrice !== loc.regularPrice && (
                <div className="text-[11px] text-text-muted line-through">{loc.regularPrice}</div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Count + hint */}
      <p className="text-center text-[13px] text-text-muted">
        {locale === "fr"
          ? `${filtered.length} emplacement${filtered.length > 1 ? "s" : ""} — Cliquez pour voir les détails`
          : `${filtered.length} location${filtered.length > 1 ? "s" : ""} — Click any to see full details`}
      </p>
    </div>
  );
}
