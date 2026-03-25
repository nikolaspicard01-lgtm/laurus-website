export interface Location {
  slug: string;
  name: string;
  region: string;
  venue?: string;
  address?: string;
  dates: string;
  regularPrice: string;
  earlyBirdPrice: string;
  notes?: string;
}

export const summerLocations: Location[] = [
  // West Island
  { slug: "dollard-des-ormeaux", name: "Dollard-des-Ormeaux", region: "West Island", venue: "Emmanuel Christian School", address: "4698 Boul Saint-Jean, DDO, QC H9H 4S5", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk", notes: "OPEN Jun 24 & Jul 1" },
  { slug: "beaconsfield", name: "Beaconsfield", region: "West Island", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "baie-durfe", name: "Baie d'Urfé", region: "West Island", venue: "Bayside Academy", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "ile-bizard", name: "Île-Bizard", region: "West Island", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "sainte-genevieve", name: "Sainte-Geneviève", region: "West Island", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  // Montreal
  { slug: "montreal-downtown", name: "Montreal Downtown", region: "Montreal", venue: "Sacred Heart School", address: "3635 Atwater Ave, Montreal, QC H3H 1V6", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "notre-dame-de-grace", name: "Notre-Dame-de-Grâce (NDG)", region: "Montreal", venue: "Willingdon Elementary", address: "5870 Rue de Terrebonne, Montreal, QC", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk", notes: "Closed Jun 24 & Jul 1 (relocated to Sacred Heart)" },
  { slug: "town-of-mount-royal", name: "Town of Mount Royal (TMR)", region: "Montreal", venue: "Mount Royal Academy", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "verdun", name: "Verdun", region: "Montreal", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "ville-saint-laurent", name: "Ville Saint-Laurent", region: "Montreal", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "saint-leonard", name: "Saint-Léonard", region: "Montreal", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  { slug: "riviere-des-prairies", name: "Rivière-des-Prairies", region: "Montreal", dates: "Jun 22 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk" },
  // Off Island
  { slug: "laval", name: "Laval", region: "Off Island", venue: "John F. Kennedy Elementary", address: "500 Rue Cardinal, Laval, QC H7V 1T5", dates: "Jun 24 – Aug 21", regularPrice: "$365/wk", earlyBirdPrice: "$325/wk", notes: "Starts Jun 24; OPEN Jun 24 & Jul 1" },
  { slug: "rosemere", name: "Rosemère", region: "Off Island", dates: "Jun 22 – Aug 21", regularPrice: "$365/wk", earlyBirdPrice: "$325/wk" },
  { slug: "brossard", name: "Brossard", region: "Off Island", venue: "Roya Elementary", address: "6205 Grande Allée, Brossard, QC J4Z 3K1", dates: "Jun 22 – Aug 21", regularPrice: "$365/wk", earlyBirdPrice: "$325/wk", notes: "OPEN Jun 24 & Jul 1" },
  { slug: "vaudreuil", name: "Vaudreuil", region: "Off Island", dates: "Jun 22 – Aug 21", regularPrice: "$365/wk", earlyBirdPrice: "$325/wk" },
  // Ontario
  { slug: "toronto", name: "Toronto (Woodbridge)", region: "Ontario", venue: "Toronto District Christian High School", address: "377 Woodbridge Ave, Woodbridge, ON L4L 2V7", dates: "Jun 29 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$295/wk", notes: "Starts Jun 29" },
  { slug: "ottawa", name: "Ottawa", region: "Ontario", venue: "Roberta Bondar", address: "159 Lorry Greenberg Dr, Ottawa, ON K1T 3J6", dates: "Jul 6 – Aug 21", regularPrice: "$375/wk", earlyBirdPrice: "$345/wk", notes: "Starts Jul 6" },
];

export const springLocations: Location[] = [
  { slug: "dollard-des-ormeaux", name: "DDO", region: "Quebec", venue: "Emmanuel Christian School", address: "4698 Boul Saint-Jean", dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk" },
  { slug: "laval", name: "Laval", region: "Quebec", venue: "John F. Kennedy Elementary", address: "500 Rue Cardinal", dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk" },
  { slug: "notre-dame-de-grace", name: "NDG", region: "Quebec", venue: "Willingdon Elementary", address: "5870 Rue de Terrebonne", dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk" },
  { slug: "verdun", name: "Verdun", region: "Quebec", dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk" },
  { slug: "town-of-mount-royal", name: "TMR", region: "Quebec", dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk" },
  { slug: "westmount", name: "Westmount", region: "Quebec", dates: "Mar 2–6, 2026", regularPrice: "$375/wk", earlyBirdPrice: "$375/wk" },
  { slug: "rosemere", name: "Rosemère", region: "Quebec", dates: "Mar 2–6, 2026", regularPrice: "$350/wk", earlyBirdPrice: "$350/wk" },
  { slug: "toronto", name: "Toronto (Richmond Hill)", region: "Ontario", venue: "Holy Trinity School", address: "11300 Bayview Ave, Richmond Hill, ON L4S 1L4", dates: "Mar 16–20, 2026", regularPrice: "$575/wk", earlyBirdPrice: "$575/wk" },
];
