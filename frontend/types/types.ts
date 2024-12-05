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
