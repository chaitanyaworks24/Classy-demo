export type ServiceCollection = {
  group: 'home' | 'commercial';
  slug: string;
  title: string;
  kind: string;
  description: string;
  projectIds?: string[];
  images?: string[];
};

export const serviceCollections: ServiceCollection[] = [
  {
    group: "home",
    slug: "1bhk",
    title: "1 BHK Interiors",
    kind: "1 BHK",
    description: "Smart interiors for compact homes, with careful planning for storage, circulation and everyday comfort.",
    projectIds: ["1bhk1", "1bhk2", "1bhk3"]
  },
  {
    group: "home",
    slug: "2bhk",
    title: "2 BHK Interiors",
    kind: "2 BHK",
    description: "Balanced 2 BHK interiors that bring practical storage and a cohesive material language across the home.",
    projectIds: ["2bhk1", "2bhk2", "2bhk3", "2bhk4"]
  },
  {
    group: "home",
    slug: "3bhk",
    title: "3 BHK Interiors",
    kind: "3 BHK",
    description: "Layered 3 BHK interiors with room for personality, function, family life and considered detailing.",
    projectIds: ["3bhk1", "3bhk2", "3bhk4", "3bhl3"]
  },
  {
    group: "home",
    slug: "villa",
    title: "Villa Interiors",
    kind: "Villa",
    description: "Complete villa interiors planned as one connected experience, from arrival spaces to private rooms.",
    projectIds: ["villa1", "villa2", "villa4"]
  },
  {
    group: "commercial",
    slug: "office",
    title: "Office Spaces",
    kind: "Office",
    description: "Workplaces designed around focus, collaboration, movement and the character of the business.",
    images: [
      "/assets/services/Commercial/office/imgi_10_bfi-bank-offices-lisbon-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_11_oracle-offices-dhaka-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_12_1-lower-marsh-shared-amenity-spaces-london-3-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_34_e3faba252054775.Y3JvcCwyNTE1LDE5NjcsMjQ5LDMyOQ.jpg",
      "/assets/services/Commercial/office/imgi_35_014568253464727.Y3JvcCwzMzc1LDI2MzksMCwxMDE5.jpg",
      "/assets/services/Commercial/office/imgi_39_37edd6225895657.Y3JvcCwxMTkyLDkzMyw3OSww.jpg",
      "/assets/services/Commercial/office/imgi_3_spotlight-tour-edelmans-new-york-city-offices-by-gensler.jpg",
      "/assets/services/Commercial/office/imgi_40_70e1cc228650293.Y3JvcCwxNDAwLDEwOTUsMCwxNzY.jpg",
      "/assets/services/Commercial/office/imgi_47_d29de5174552043.Y3JvcCwxOTIwLDE1MDEsMCw0NDY.jpg",
      "/assets/services/Commercial/office/imgi_52_44f8ed250596145.Y3JvcCwzNTIwLDI3NTMsMCw5Njc.jpg",
      "/assets/services/Commercial/office/imgi_53_317573252307453.Y3JvcCwyNTU2LDIwMDAsNzY1LDA.jpg",
      "/assets/services/Commercial/office/imgi_57_591d77253465803.Y3JvcCwzNjMxLDI4NDAsMTE1MCw3NjM.png",
      "/assets/services/Commercial/office/imgi_58_28ce67254839605.Y3JvcCwyNDI2LDE4OTcsMzc4LDQ4.jpg",
      "/assets/services/Commercial/office/imgi_59_9e2759252223525.Y3JvcCwxOTk5LDE1NjQsMCwzNTY.jpg",
      "/assets/services/Commercial/office/imgi_6_kvn-production-office-bengaluru-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_7_ma-office-new-delhi-2-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_8_confidential-credit-service-company-kuala-lumpur-1-1000x600.jpg",
      "/assets/services/Commercial/office/imgi_9_sita-offices-barcelona-1000x600.jpg"
    ]
  },
  {
    group: "commercial",
    slug: "restaurants",
    title: "Restaurants",
    kind: "Restaurant",
    description: "Hospitality interiors shaped around atmosphere, guest movement, seating and memorable moments.",
    images: [
      "/assets/services/Commercial/restaurants/imgi_10_Restaurant-Interior-Design-27-1024x683.webp",
      "/assets/services/Commercial/restaurants/imgi_12_Restaurant-Interior-Design-21-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_15_Restaurant-Interior-Design-52-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_16_Restaurant-Interior-Design-54-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_19_Restaurant-Interior-Design-61-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_23_Restaurant-Interior-Design-3-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_24_Restaurant-Interior-Design-2-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_25_Restaurant-Interior-Design-30-1024x683.webp",
      "/assets/services/Commercial/restaurants/imgi_26_Restaurant-Interior-Design-31-1024x683.webp",
      "/assets/services/Commercial/restaurants/imgi_27_Restaurant-Interior-Design-9-1024x683.webp",
      "/assets/services/Commercial/restaurants/imgi_28_Restaurant-Interior-Design-8-1024x683.webp",
      "/assets/services/Commercial/restaurants/imgi_29_Restaurant-Interior-Design-34.png",
      "/assets/services/Commercial/restaurants/imgi_30_Restaurant-Interior-Design-35.png",
      "/assets/services/Commercial/restaurants/imgi_31_Restaurant-Interior-Design-4-1024x731.webp",
      "/assets/services/Commercial/restaurants/imgi_32_Restaurant-Interior-Design-5.webp",
      "/assets/services/Commercial/restaurants/imgi_33_Restaurant-Interior-Design-12-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_34_Restaurant-Interior-Design-13-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_37_Restaurant-Interior-Design-16-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_38_Restaurant-Interior-Design-17-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_40_Restaurant-Interior-Design-19-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_41_Restaurant-Interior-Design-24-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_42_Restaurant-Interior-Design-25-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_43_Restaurant-Interior-Design-28-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_44_Restaurant-Interior-Design-29-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_46_Restaurant-Interior-Design-41.webp",
      "/assets/services/Commercial/restaurants/imgi_47_Restaurant-Interior-Design-43.webp",
      "/assets/services/Commercial/restaurants/imgi_6_Restaurant-Interior-Design-32-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_7_Restaurant-Interior-Design-22-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_8_Restaurant-Interior-Design-23-jpg.webp",
      "/assets/services/Commercial/restaurants/imgi_9_Restaurant-Interior-Design-26-1024x683.webp"
    ]
  },
  {
    group: "commercial",
    slug: "shops",
    title: "Shops & Retail",
    kind: "Retail",
    description: "Retail spaces designed to make circulation, merchandising and brand presence work together.",
    images: [
      "/assets/services/Commercial/shop/imgi_10_DSC01418.jpg",
      "/assets/services/Commercial/shop/imgi_17_11.jpg",
      "/assets/services/Commercial/shop/imgi_18_6.jpg",
      "/assets/services/Commercial/shop/imgi_19__PAB0759-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_20__PAB0844-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_21__PAB0983-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_22__PAB0829-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_24__PAB0819-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_25__PAB0792-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_26__PAB0953-HDR.jpg",
      "/assets/services/Commercial/shop/imgi_27_RT400286-Edit.jpg",
      "/assets/services/Commercial/shop/imgi_28_RT400356-Edit.jpg",
      "/assets/services/Commercial/shop/imgi_29_RT400472-HDR-Edit.jpg",
      "/assets/services/Commercial/shop/imgi_30_RT400012-Edit.jpg",
      "/assets/services/Commercial/shop/imgi_31_RT400055-Edit.jpg",
      "/assets/services/Commercial/shop/imgi_3_DSC01340.jpg",
      "/assets/services/Commercial/shop/imgi_4_DSC01341.jpg",
      "/assets/services/Commercial/shop/imgi_8_DSC01425.jpg",
      "/assets/services/Commercial/shop/imgi_9_DSC01377.jpg"
    ]
  }
];
