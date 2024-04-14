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
