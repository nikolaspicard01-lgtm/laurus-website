export interface Location {
  slug: string;
  name: string;
  region: string;
  venue?: string;
  address?: string;
  dates: string;
  regularPrice: string;
  earlyBirdPrice: string;
  pricing?: {
    jan: string;
    feb: string;
    mar: string;
    apr: string;
  };
  notes?: string;
  highlights: string[];
  nearbyLandmarks: string;
  holidayNote?: string;
  extendedCare: string;
  lunchAvailable: boolean;
  lat: number;
  lng: number;
  registrationUrl: string;
  hours: string;
  totalWeeks: number | string;
}

export const summerLocations: Location[] = [
  // West Island
  {
    slug: "baie-durfe", name: "Baie d'Urfé", region: "West Island",
    venue: "Alexander von Humboldt German International School", address: "216 Victoria St, Baie-D'Urfe, Quebec H9X 2H9",
    dates: "Jun 25 – Aug 7", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=b6l0OYx",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 7,
    highlights: ["Scenic lakeside community", "Modern international school facilities", "Large green spaces for outdoor play", "Tight-knit community atmosphere"],
    nearbyLandmarks: "Nestled in the peaceful lakeside village of Baie d'Urfé along Lakeshore Road, near Fritz Park and the Morgan Arboretum nature reserve.",
    holidayNote: "Closed July 1st — relocated to ECS. Weeks 8 and 9 at ECS.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4100, lng: -73.9167,
  },
  {
    slug: "beaconsfield", name: "Beaconsfield", region: "West Island",
    venue: "Sherbrooke Senior Academy", address: "Beaconsfield, Quebec H9W 1V8",
    dates: "Jun 22 – Aug 21", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=k40455k",
    hours: "7 AM – 6 PM", totalWeeks: 9,
    highlights: ["Quiet residential neighbourhood setting", "Spacious schoolyard with shade areas", "Close to Beaconsfield waterfront", "Extended hours 7 AM – 6 PM"],
    nearbyLandmarks: "Situated in the charming lakefront community of Beaconsfield, near Centennial Park and the Beaconsfield Library. Minutes from Highway 20.",
    holidayNote: "June 24th and July 1st at ECS. Week 9 at ECS.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4333, lng: -73.8667,
  },
  {
    slug: "dollard-des-ormeaux", name: "DDO", region: "West Island",
    venue: "Emmanuel Christian School", address: "4698 Boul. Saint-Jean, Dollard-des-Ormeaux, QC H9H 4S5",
    dates: "Jun 22 – Aug 21", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    notes: "OPEN June 24th and July 1st",
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=bz8Ymqx",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Large outdoor fields and play areas", "Dedicated junior program area", "Open on statutory holidays", "Languages camp also available on-site"],
    nearbyLandmarks: "Located on Boulevard Saint-Jean in the heart of DDO, close to Bois-de-la-Roche nature park and local shopping plazas. Easily accessible from Highway 40.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4942, lng: -73.8125,
  },
  {
    slug: "ile-bizard", name: "Île-Bizard", region: "West Island",
    venue: "Complexe sportif Saint-Raphaël", address: "750 Jacques Bizard Blvd, L'Île-Bizard, Quebec H9C 2Y2",
    dates: "Jun 22 – Aug 21", regularPrice: "$255/wk", earlyBirdPrice: "$325/wk",
    pricing: { jan: "$255", feb: "$285", mar: "$305", apr: "$325" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=x9w9NGb",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Sports complex venue", "Access to nature trails and green spaces", "Small group sizes", "Family-friendly neighbourhood"],
    nearbyLandmarks: "Located on the island borough of Île-Bizard, close to Parc-nature du Bois-de-l'Île-Bizard and the Rivière-des-Prairies waterfront.",
    holidayNote: "June 24th at ECS. OPEN July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.5000, lng: -73.8500,
  },
  // Montreal
  {
    slug: "montreal-downtown", name: "Montreal Downtown", region: "Montreal",
    venue: "The Sacred Heart School", address: "3635 Atwater Ave, Montreal, Quebec H3H 1V6",
    dates: "Jun 22 – Aug 14", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=bVdq4Qx",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 8,
    highlights: ["Central location near Atwater metro", "Air-conditioned facilities", "Gymnasium and outdoor courtyard", "Languages camp also available on-site"],
    nearbyLandmarks: "Steps from Atwater metro station and the Westmount border. Near Dawson College, the Atwater Market, and the Lachine Canal bike path.",
    holidayNote: "OPEN June 24th and July 1st. Week 9 at Trafalgar.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4790, lng: -73.5850,
  },
  {
    slug: "notre-dame-de-grace", name: "NDG", region: "Montreal",
    venue: "Willingdon - Junior Elementary School", address: "5870 Rue de Terrebonne, Montréal, QC H4A 1B5",
    dates: "Jun 22 – Aug 21", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=xELpOey",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Tree-lined residential neighbourhood", "Dedicated junior campus at Willingdon", "Close to NDG Park and Monkland Village", "Walkable from Villa-Maria metro"],
    nearbyLandmarks: "In the heart of NDG on Rue de Terrebonne, surrounded by Monkland Village shops and cafés. Near NDG Park and easily accessible via Villa-Maria metro.",
    holidayNote: "Closed June 24th and July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4730, lng: -73.6180,
  },
  {
    slug: "riviere-des-prairies", name: "RDP", region: "Montreal",
    venue: "East Hill Elementary School", address: "10350 Bd Perras, Montréal, QC H1C 2H1",
    dates: "Jun 22 – Aug 21", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=bDE9N8y",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Waterfront neighbourhood setting", "Access to Parc-nature de la Pointe-aux-Prairies", "Generous outdoor spaces", "Smaller camp community feel"],
    nearbyLandmarks: "Located in Rivière-des-Prairies on Boulevard Perras, close to the scenic riverfront parks and Parc-nature de la Pointe-aux-Prairies.",
    holidayNote: "Closed June 24th and July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.6250, lng: -73.5850,
  },
  {
    slug: "saint-leonard", name: "Saint-Léonard", region: "Montreal",
    venue: "TBD", address: "TBD",
    dates: "TBD", regularPrice: "$255/wk", earlyBirdPrice: "$325/wk",
    pricing: { jan: "$255", feb: "$285", mar: "$305", apr: "$325" },
    notes: "Venue being confirmed",
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=y7m6Npk",
    hours: "7:30 AM – 5:30 PM", totalWeeks: "TBD",
    highlights: ["Diverse and welcoming community", "Spacious outdoor play areas", "Near Roberto-Clemente Park pool complex", "Strong bilingual programming"],
    nearbyLandmarks: "In the heart of Saint-Léonard, near Parc Wilfrid-Bastien and the Roberto-Clemente aquatic complex. Accessible via Boulevard Lacordaire and Autoroute 40.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.5870, lng: -73.5920,
  },
  {
    slug: "town-of-mount-royal", name: "TMR", region: "Montreal",
    venue: "Carlyle Elementary", address: "109 Av. Carlyle, Mont-Royal, QC H3R 1S8",
    dates: "Jun 22 – Aug 21", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=xZzP2Vx",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Premium facilities at Carlyle Elementary", "Beautifully landscaped grounds", "Central TMR location", "Indoor gym and outdoor fields"],
    nearbyLandmarks: "Located in the prestigious Town of Mount Royal, near the TMR train station and Connaught Park. Easy access from Highway 15 and Autoroute Métropolitaine.",
    holidayNote: "Closed June 24th and July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.5167, lng: -73.6333,
  },
  {
    slug: "verdun", name: "Verdun", region: "Montreal",
    venue: "TBD", address: "TBD",
    dates: "Jun 22 – Aug 21", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    notes: "Venue being confirmed",
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=xoPJLlk",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Vibrant family-friendly borough", "Near Verdun waterfront and bike paths", "Accessible by metro (De l'Église)", "Growing community with young families"],
    nearbyLandmarks: "In the lively borough of Verdun, close to the Verdun waterfront promenade and Parc du Boisé-de-Verdun. Steps from De l'Église metro station.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4580, lng: -73.5710,
  },
  {
    slug: "ville-saint-laurent", name: "VSL", region: "Montreal",
    venue: "Parkdale Elementary School", address: "1475 Rue Deguire, Saint-Laurent, QC H4L 1M4",
    dates: "Jun 22 – Aug 21", regularPrice: "$255/wk", earlyBirdPrice: "$325/wk",
    pricing: { jan: "$255", feb: "$285", mar: "$305", apr: "$325" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=xZzPA3x",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Multicultural neighbourhood", "Well-equipped school facilities", "Close to Parc Marcel-Laurin", "Easy highway access from A-15 and A-40"],
    nearbyLandmarks: "Centrally located in Ville Saint-Laurent, near Parc Marcel-Laurin and the Saint-Laurent borough library. Quick access from Autoroutes 15 and 40.",
    holidayNote: "Closed June 24th and July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.5050, lng: -73.6750,
  },
  // Off Island
  {
    slug: "brossard", name: "Brossard", region: "Off Island",
    venue: "Greenfield Park Primary International School", address: "776 Rue Campbell, Greenfield Park, QC J4V 1Y7",
    dates: "Jun 22 – Aug 21", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    notes: "OPEN June 24th and July 1st",
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=y0RWE4k",
    hours: "7:30 AM – 6 PM", totalWeeks: 9,
    highlights: ["Open on statutory holidays", "Modern South Shore facilities", "Near Quartier DIX30 and parks", "Affordable off-island pricing"],
    nearbyLandmarks: "On Rue Campbell in Greenfield Park, near Parc Greenfield and the Champlain Bridge. Easy access from Highway 10 and the Samuel De Champlain Bridge.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4580, lng: -73.4580,
  },
  {
    slug: "laval", name: "Laval", region: "Off Island",
    venue: "John F. Kennedy Elementary School", address: "500 Rue Cardinal, Laval, QC H7V 1T5",
    dates: "Jun 24 – Aug 21", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=kX6W0Ry",
    hours: "7 AM – 6 PM", totalWeeks: 9,
    highlights: ["Open on statutory holidays", "Spacious gymnasium and outdoor courts", "Extended hours 7 AM – 6 PM", "Affordable off-island pricing"],
    nearbyLandmarks: "On Rue Cardinal in Chomedey, Laval, near Centre de la Nature and Cosmodôme. Easy access from Autoroute 13 and Boulevard Chomedey.",
    holidayNote: "Starts June 24th. OPEN June 24th and July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.5580, lng: -73.7500,
  },
  {
    slug: "rosemere", name: "Rosemère", region: "Off Island",
    venue: "McCaig Elementary", address: "501 Northcote St, Rosemère, Quebec J7A 1Y1",
    dates: "Jun 29 – Aug 14", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=k1jv4Bb",
    hours: "7 AM – 6 PM", totalWeeks: 7,
    highlights: ["North Shore convenience", "Extended hours 7 AM – 6 PM", "Small-town community atmosphere", "Affordable off-island pricing"],
    nearbyLandmarks: "In the charming town of Rosemère on the North Shore, near Parc Charbonneau and Rivière des Mille Îles. Accessible from Autoroute 15 North.",
    holidayNote: "Starts June 29th. Open July 1st.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.6370, lng: -73.8000,
  },
  {
    slug: "vaudreuil", name: "Vaudreuil", region: "Off Island",
    venue: "Centre Sportif Lévis Sauvé", address: "Pavillon E, 400 Avenue Saint-Charles, Vaudreuil-Dorion, QC",
    dates: "Jun 22 – Aug 21", regularPrice: "$275/wk", earlyBirdPrice: "$330/wk",
    pricing: { jan: "$275", feb: "$315", mar: "$325", apr: "$330" },
    notes: "OPEN June 24th and July 1st",
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=y2pPwlk",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 9,
    highlights: ["Suburban family community", "Close to Lac des Deux Montagnes", "Open on statutory holidays", "Affordable off-island pricing"],
    nearbyLandmarks: "At the Centre Sportif Lévis Sauvé on Avenue Saint-Charles in Vaudreuil-Dorion, near Parc de la Maison-Valois and Lac des Deux Montagnes. Accessible from Highway 40 West.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.4000, lng: -74.0300,
  },
  // Ontario
  {
    slug: "ottawa", name: "Ottawa", region: "Ontario",
    venue: "Sawmill Creek Elementary School", address: "3400 D'Aoust Ave, Gloucester, ON K1T 1R5",
    dates: "Jul 6 – Aug 14", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=kX6WNXy",
    hours: "7:30 AM – 5:30 PM", totalWeeks: "3–8",
    highlights: ["Canada's capital city location", "Modern school facilities", "Week 9 at St. Timothy's Presbyterian Church", "Starts July 6 — great for summer-only families"],
    nearbyLandmarks: "On D'Aoust Avenue in Gloucester, Ottawa's south end, near Sawmill Creek and the Rideau River trail system. Close to Hunt Club Road.",
    holidayNote: "Starts July 6th to end August 14th.",
    extendedCare: "Included", lunchAvailable: true, lat: 45.3550, lng: -75.6250,
  },
  {
    slug: "toronto", name: "Toronto", region: "Ontario",
    venue: "Toronto District Christian High School", address: "377 Woodbridge Ave, Woodbridge, ON L4L 2V7",
    dates: "Jun 29 – Aug 21", regularPrice: "$295/wk", earlyBirdPrice: "$350/wk",
    pricing: { jan: "$295", feb: "$335", mar: "$345", apr: "$350" },
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/api/Program/Detail?programId=yP0L7qy",
    hours: "7:30 AM – 5:30 PM", totalWeeks: 8,
    highlights: ["Full gymnasium and outdoor courts", "Ontario curriculum alignment", "Largest early bird discount ($80 off)", "Starts June 29 — perfect for Ontario families"],
    nearbyLandmarks: "On Woodbridge Avenue in Vaughan, near Boyd Conservation Area and the Woodbridge Fairgrounds. Easy access from Highway 400 and Highway 7.",
    holidayNote: "Starts June 29th.",
    extendedCare: "Included", lunchAvailable: true, lat: 43.7900, lng: -79.5900,
  },
];

export const springLocations: Location[] = [
  {
    slug: "dollard-des-ormeaux", name: "DDO", region: "Quebec",
    venue: "Emmanuel Christian School", address: "4698 Boul Saint-Jean",
    dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk",
    highlights: ["Same great summer camp activities", "Full-week and single-day options", "Large outdoor fields and play areas", "Extended care available"],
    nearbyLandmarks: "Located on Boulevard Saint-Jean in the heart of DDO, close to Bois-de-la-Roche nature park and local shopping plazas.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.4942, lng: -73.8125,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "laval", name: "Laval", region: "Quebec",
    venue: "John F. Kennedy Elementary", address: "500 Rue Cardinal",
    dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk",
    highlights: ["Spacious gymnasium and outdoor courts", "Affordable spring break option", "Full-week and single-day options", "Near Centre de la Nature"],
    nearbyLandmarks: "On Rue Cardinal in Chomedey, Laval, near Centre de la Nature and Cosmodôme. Easy access from Autoroute 13.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.5580, lng: -73.7500,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "notre-dame-de-grace", name: "NDG", region: "Quebec",
    venue: "Willingdon Elementary", address: "5870 Rue de Terrebonne",
    dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk",
    highlights: ["Tree-lined residential neighbourhood", "Walkable from Villa-Maria metro", "Full-week and single-day options", "Close to Monkland Village"],
    nearbyLandmarks: "In the heart of NDG on Rue de Terrebonne, surrounded by Monkland Village shops and cafés. Near NDG Park.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.4730, lng: -73.6180,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "verdun", name: "Verdun", region: "Quebec",
    dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk",
    highlights: ["Vibrant family-friendly borough", "Near Verdun waterfront", "Accessible by metro (De l'Église)", "Full-week and single-day options"],
    nearbyLandmarks: "In the lively borough of Verdun, close to the Verdun waterfront promenade. Steps from De l'Église metro station.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.4580, lng: -73.5710,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "town-of-mount-royal", name: "TMR", region: "Quebec",
    dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk",
    highlights: ["Premium TMR neighbourhood", "Indoor gymnasium available", "Full-week and single-day options", "Near TMR train station"],
    nearbyLandmarks: "Located in the prestigious Town of Mount Royal, near the TMR train station and Connaught Park.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.5167, lng: -73.6333,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "westmount", name: "Westmount", region: "Quebec",
    dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk",
    highlights: ["Upscale Westmount neighbourhood", "Close to Westmount Park", "Full-week and single-day options", "Walkable from Vendôme metro"],
    nearbyLandmarks: "In the prestigious neighbourhood of Westmount, near Westmount Park, the Westmount Library, and Victoria Village shops.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.4833, lng: -73.6000,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "rosemere", name: "Rosemère", region: "Quebec",
    dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk",
    highlights: ["North Shore convenience", "Small-town community atmosphere", "Full-week and single-day options", "Surrounded by parks and nature"],
    nearbyLandmarks: "In the charming town of Rosemère on the North Shore, near Parc Charbonneau and Rivière des Mille Îles.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 45.6370, lng: -73.8000,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
  {
    slug: "toronto", name: "Toronto (Richmond Hill)", region: "Ontario",
    venue: "Holy Trinity School", address: "11300 Bayview Ave, Richmond Hill, ON L4S 1L4",
    dates: "Mar 16–20, 2026", regularPrice: "$575/wk", earlyBirdPrice: "$575/wk",
    highlights: ["Premium Holy Trinity School campus", "Ontario March Break timing (Mar 16–20)", "Full gymnasium and sports facilities", "Aligns with Ontario school calendar"],
    nearbyLandmarks: "On Bayview Avenue in Richmond Hill, near Lake Wilcox Park and the Richmond Green Sports Centre. Easy access from Highway 404.",
    extendedCare: "+$8/hour", lunchAvailable: true, lat: 43.8600, lng: -79.4400,
    registrationUrl: "https://app.amilia.com/store/en/laurus-summer-camp/shop/programs", hours: "7:30 AM – 5:30 PM", totalWeeks: 1,
  },
];
