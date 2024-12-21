export type brand = {
  id: string;
  name: string;
  country: string;
  website: string;
  slug: string;
  models: car[];
};

export type car = {
  id: string;
  name: string;
  slug: string;
  brand: brand;
  bodyType: BodyType;
  website: string;
  imageUrl: string;
  variants: carVariant[];
  professionalReviews: professionalreview[];
  length: number;
  width: number;
  height: number;
  wheelbase: number;
};

export type professionalreview = {
  id: string;
  title: string;
  content: string;
  rating: number;
  website: string;
};

export type carVariant = {
  id: string;
  name: string;
  engines: carEngine[];
};

export type carEngine = {
  id: string;
  name: string;
  fuelType: FuelType;
  power: number;
};

export enum BodyType {
  SEDAN = "SEDAN",
  SUV = "SUV",
  CROSSOVER = "CROSSOVER",
  HATCHBACK = "HATCHBACK",
  WAGON = "WAGON",
  COUPE = "COUPE",
  CONVERTIBLE = "CONVERTIBLE",
  PICKUP = "PICKUP",
  VAN = "VAN",
  CABRIOLET = "CABRIOLET",
}

export const bodyTypeLabels: { value: string; label: string }[] = [
  { value: BodyType.SEDAN, label: "Sedan" },
  { value: BodyType.SUV, label: "SUV" },
  { value: BodyType.CROSSOVER, label: "Crossover" },
  { value: BodyType.HATCHBACK, label: "Hatchback" },
  { value: BodyType.WAGON, label: "Wagon" },
  { value: BodyType.COUPE, label: "Coupé" },
  { value: BodyType.CONVERTIBLE, label: "Convertible" },
  { value: BodyType.PICKUP, label: "Pickup" },
  { value: BodyType.VAN, label: "Van" },
  { value: BodyType.CABRIOLET, label: "Cabriolet" },
];

export enum Brand {
  AUDI = "audi",
  BMW = "bmw",
  MERCEDES_BENZ = "mercedes-benz",
  VOLKSWAGEN = "volkswagen",
  TOYOTA = "toyota",
  FORD = "ford",
  KIA = "kia",
  VOLVO = "volvo",
  PEUGEOT = "peugeot",
  RENAULT = "renault",
  SKODA = "skoda",
}

export const brandLabels: { value: string; label: string }[] = [
  { value: Brand.AUDI, label: "Audi" },
  { value: Brand.BMW, label: "BMW" },
  { value: Brand.MERCEDES_BENZ, label: "Mercedes-Benz" },
  { value: Brand.VOLKSWAGEN, label: "Volkswagen" },
  { value: Brand.TOYOTA, label: "Toyota" },
  { value: Brand.FORD, label: "Ford" },
  { value: Brand.KIA, label: "Kia" },
  { value: Brand.VOLVO, label: "Volvo" },
  { value: Brand.PEUGEOT, label: "Peugeot" },
  { value: Brand.RENAULT, label: "Renault" },
  { value: Brand.SKODA, label: "Skoda" },
];

export enum FuelType {
  PETROL = "petrol",
  DIESEL = "diesel",
  ELECTRIC = "electric",
  HYBRID = "hybrid",
  PHEV = "phev",
}

export const fuelTypeLabels: { value: string; label: string }[] = [
  { value: FuelType.PETROL, label: "Petrol" },
  { value: FuelType.DIESEL, label: "Diesel" },
  { value: FuelType.ELECTRIC, label: "Electric" },
  { value: FuelType.HYBRID, label: "Hybrid" },
  { value: FuelType.PHEV, label: "PHEV" },
];

export const bodyTypeText = (bodyType: BodyType) => {
  switch (bodyType) {
    case BodyType.SEDAN:
      return "Sedan";
    case BodyType.SUV:
      return "SUV";
    case BodyType.CROSSOVER:
      return "Crossover";
    case BodyType.HATCHBACK:
      return "Hatchback";
    case BodyType.WAGON:
      return "Wagon";
    case BodyType.COUPE:
      return "Coupé";
    case BodyType.CONVERTIBLE:
      return "Convertible";
    case BodyType.PICKUP:
      return "Pickup";
    case BodyType.VAN:
      return "Van";
    case BodyType.CABRIOLET:
      return "Cabriolet";
  }
};

export type user = {
  id: string;
  email: string;
  role: string;
};
