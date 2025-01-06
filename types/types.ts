import { BodyType, Country, FuelType } from "@prisma/client";

export const countryLabels: { value: Country; label: string }[] = [
  { value: Country.SWEDEN, label: "Sverige 🇸🇪" },
  { value: Country.UNITED_STATES, label: "USA 🇺🇸" },
  { value: Country.JAPAN, label: "Japan 🇯🇵" },
  { value: Country.GERMANY, label: "Tyskland 🇩🇪" },
  { value: Country.FRANCE, label: "Frankrike 🇫🇷" },
  { value: Country.ITALY, label: "Italien 🇮🇹" },
  { value: Country.SOUTH_KOREA, label: "Sydkorea 🇰🇷" },
  { value: Country.UNITED_KINGDOM, label: "Storbritannien 🇬🇧" },
  { value: Country.CZECH_REPUBLIC, label: "Tjeckien 🇨🇿" },
  { value: Country.ROMANIA, label: "Rumänien 🇷🇴" },
  { value: Country.SPAIN, label: "Spanien 🇪🇸" },
];

export const brandMeta: Record<Country, { label: string; flag: string }> = {
  SWEDEN: { label: "Sverige", flag: "🇸🇪" },
  GERMANY: { label: "Tyskland", flag: "🇩🇪" },
  UNITED_STATES: { label: "USA", flag: "🇺🇸" },
  JAPAN: { label: "Japan", flag: "🇯🇵" },
  SOUTH_KOREA: { label: "Sydkorea", flag: "🇰🇷" },
  FRANCE: { label: "Frankrike", flag: "🇫🇷" },
  CZECH_REPUBLIC: { label: "Tjeckien", flag: "🇨🇿" },
  ROMANIA: { label: "Rumänien", flag: "🇷🇴" },
  ITALY: { label: "Italien", flag: "🇮🇹" },
  UNITED_KINGDOM: { label: "Storbritannien", flag: "🇬🇧" },
  SPAIN: { label: "Spanien", flag: "🇪🇸" },
};

export const bodyTypeLabels: Record<BodyType, string> = {
  SEDAN: "Sedan",
  SUV: "SUV",
  CROSSOVER: "CUV",
  HATCHBACK: "Halvkombi",
  COUPE: "Kupé",
  CONVERTIBLE: "Cabriolet",
  WAGON: "Kombi",
  PICKUP: "Pickup",
  VAN: "Skåpbil",
  CABRIOLET: "Cabriolet",
};

export const fuelTypeLabels: Record<FuelType, string> = {
  PETROL: "Bensin",
  DIESEL: "Diesel",
  ELECTRIC: "El",
  HYBRID: "Hybrid",
  PHEV: "Plugin hybrid",
};
