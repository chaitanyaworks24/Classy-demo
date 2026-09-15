export const homeTypes = ["1 BHK", "2 BHK", "3 BHK", "Villa", "Other / Custom"] as const;
export type HomeType = typeof homeTypes[number];

export const spaceOptions = [
  "Kitchen",
  "Living Room",
  "Bedroom(s)",
  "Dining Area",
  "Pooja Room",
  "TV Unit",
  "Wardrobe",
  "Foyer",
  "Full Home",
  "Other"
] as const;

export type SpaceOption = typeof spaceOptions[number];

export const maxBedroomsByConfig: Record<HomeType, number> = {
  "1 BHK": 1,
  "2 BHK": 2,
  "3 BHK": 3,
  "Villa": 8,
  "Other / Custom": 10 // reasonable fallback
};

export const finishTiers = [
  {
    id: "Essential",
    name: "Essential",
    description: "A practical, well-finished interior focused on essential functionality and value.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
    multiplier: 0.85
  },
  {
    id: "Premium",
    name: "Premium",
    description: "A refined balance of materials, detailing, durability and design.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
    multiplier: 1.0
  },
  {
    id: "Luxury",
    name: "Luxury",
    description: "Higher-end finishes, detailing and elevated material choices.",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800",
    multiplier: 1.25
  }
] as const;

export type FinishTier = typeof finishTiers[number]["id"];

export const timelines = [
  "Ready to start",
  "Planning for the next 3 months",
  "Just exploring"
];

// Centralized pricing calculation logic
// Returns range in Lakhs [min, max]
export function calculateEstimate(config: {
  homeType: HomeType;
  spaces: string[];
  finishTier: FinishTier;
  sqft?: number;
}): [number, number] {
  // Base ranges for "Premium" tier (multiplier = 1.0)
  const baseRanges: Record<string, [number, number]> = {
    '1 BHK': [4, 7],
    '2 BHK': [6, 10],
    '3 BHK': [8, 14],
    'Villa': [15, 30],
    'Other / Custom': [5, 12]
  };

  const base = baseRanges[config.homeType] || baseRanges['Other / Custom'];
  const tier = finishTiers.find(t => t.id === config.finishTier);
  const mult = tier ? tier.multiplier : 1;

  // Space adjustments
  // If 'Full Home' is selected, assume full base price.
  // Otherwise, scale based on the number of spaces selected relative to a typical full home (e.g. 5 core spaces)
  let spaceMult = 1;
  if (!config.spaces.includes("Full Home") && config.spaces.length > 0) {
    // Basic heuristic: each room adds about 15-20% of the total budget up to 100%
    spaceMult = Math.min(1, config.spaces.length * 0.2);
  }

  // Sqft adjustments
  // If sqft is provided and seems large for the configuration, we might slightly bump the estimate
  let sqftMult = 1;
  if (config.sqft && config.sqft > 100) {
    // E.g., baseline sqft expectations for 2bhk is ~1000. If 1500, we add a bit. 
    // This is purely indicative logic for the demo.
    const baseline = config.homeType === '1 BHK' ? 600 : config.homeType === '2 BHK' ? 1000 : config.homeType === '3 BHK' ? 1500 : 2500;
    if (config.sqft > baseline) {
      sqftMult = 1 + ((config.sqft - baseline) / baseline) * 0.5; // Up to 50% increase if double size
    }
  }

  const finalMin = base[0] * mult * spaceMult * sqftMult;
  const finalMax = base[1] * mult * spaceMult * sqftMult;

  // Round to 1 decimal place to avoid fake precision (e.g. 8.5)
  return [
    Math.round(finalMin * 10) / 10,
    Math.round(finalMax * 10) / 10
  ];
}
