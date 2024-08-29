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
  bodyType: string;
  website: string;
  imageUrl: string;
};
