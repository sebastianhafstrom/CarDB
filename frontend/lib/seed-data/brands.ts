import { Country } from "@prisma/client";

export const carBrandsToImport: {
  id: string;
  name: string;
  slug: string;
  website: string;
  country: Country;
  logoUrl: string;
}[] = [
  {
    id: "8272a395-0819-4d22-a502-75d3469e288c",
    name: "Volvo",
    slug: "volvo",
    country: Country.SWEDEN,
    website: "https://www.volvocars.com/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "6f849336-3646-4d91-83b5-ec7348c13462",
    name: "Volkswagen",
    slug: "volkswagen",
    country: Country.GERMANY,
    website: "https://www.volkswagen.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "107c6cc2-374b-43b5-b00a-937206246df0",
    name: "BMW",
    slug: "bmw",
    country: Country.GERMANY,
    website: "https://www.bmw.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "c9290011-c8e1-4bee-bb16-ce980bc8ebe8",
    name: "Audi",
    slug: "audi",
    country: Country.GERMANY,
    website: "https://www.audi.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "156e6717-a557-46d0-9e59-1bd65f439d02",
    name: "Mercedes-Benz",
    slug: "mercedes-benz",
    country: Country.GERMANY,
    website: "https://www.mercedes-benz.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "b80e4171-c20a-4d3c-b4e7-202e72b41468",
    name: "Toyota",
    slug: "toyota",
    country: Country.JAPAN,
    website: "https://www.toyota.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "81bba14c-8a76-478c-8a00-67e5333b6cad",
    name: "Ford",
    slug: "ford",
    country: Country.UNITED_STATES,
    website: "https://www.ford.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "e5bccd4d-c5d4-4590-a594-b8f171a1dc0e",
    name: "Peugeot",
    slug: "peugeot",
    country: Country.FRANCE,
    website: "https://www.peugeot.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "a75a2dd2-fa75-4aa1-9649-39327efc8c50",
    name: "Renault",
    slug: "renault",
    country: Country.FRANCE,
    website: "https://www.renault.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "00e4f1e2-6ee6-43b5-a3aa-ee8e0954a245",
    name: "Skoda",
    slug: "skoda",
    country: Country.CZECH_REPUBLIC,
    website: "https://www.skoda.se/",
    logoUrl: "/brands/skoda.png",
  },
  {
    id: "efb769d4-bb05-45e5-9cb7-7a8ad290343c",
    name: "Kia",
    slug: "kia",
    country: Country.SOUTH_KOREA,
    website: "https://www.kia.com/se/",
    logoUrl: "/brands/skoda.png",
  },
];
