export type brand = {
  id: string;
  name: string;
  origin_country: string;
  website: string;
  slug: string;
};

export type createBrandRequest = {
  name: string;
  origin_country: string;
  website: string;
  slug: string;
};

export type car = {
  id: string;
  name: string;
  slug: string;
  brand: brand;
  body_type: string;
  generations: [];
};

export type createCarRequest = {
  name: string;
  slug: string;
  brand_id: string;
  body_type: string;
};

export type carGeneration = {
  id: string;
  name: string;
  production_start_year: number;
  production_end_year: number | null;
  tire_size: string;
  length_mm: number;
  width_mm: number;
  height_mm: number;
  ground_clearance_mm: number;
  cargo_volume_litres: number;
};

export type createCarGenerationRequest = {
  name: string;
  production_start_year: number;
  production_end_year: number | null;
  tire_size: string;
  length_mm: number;
  width_mm: number;
  height_mm: number;
  ground_clearance_mm: number;
  cargo_volume_litres: number;
};
