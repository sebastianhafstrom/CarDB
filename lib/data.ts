import { BodyType, CarBrand, CarModel, FuelType } from "@prisma/client";
import prisma from "./prisma";

const ITEMS_PER_PAGE = 10;

export async function fetchCarBrandBySlug(
  slug: string
): Promise<CarBrand | null> {
  try {
    const brand = await prisma.carBrand.findUnique({
      where: {
        slug: slug,
      },
    });
    return brand;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch brand.");
  }
}

export async function fetchCarBrandById(id: string): Promise<CarBrand> {
  try {
    const brand = await prisma.carBrand.findUnique({
      where: {
        id,
      },
    });
    if (!brand) {
      throw new Error("Car does not belong to a brand.");
    }
    return brand;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch brand.");
  }
}

export async function fetchFilteredBrands(query: string): Promise<CarBrand[]> {
  try {
    const brands = await prisma.carBrand.findMany({
      where: {
        name: {
          contains: query,
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    return brands;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch brands.");
  }
}

export async function fetchFilteredBrandsAdmin(query: string) {
  try {
    const brands = await prisma.carBrand.findMany({
      include: {
        models: true,
      },
      where: {
        name: {
          contains: query,
        },
      },
      orderBy: {
        name: "asc",
      },
    });
    return brands;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch brands.");
  }
}

export async function fetchBrandsPages(query: string) {
  try {
    const count = await prisma.carBrand.count({
      where: {
        name: {
          contains: query,
        },
      },
    });

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of invoices.");
  }
}

export async function fetchCarModelBySlug(slug: string) {
  try {
    const car = await prisma.carModel.findUnique({
      where: {
        slug,
      },
      include: {
        brand: true,
        professionalReviews: true,
      },
    });
    return car;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch car.");
  }
}

export async function fetchSimilarCarModels(modelId: string) {
  const car = await prisma.carModel.findUnique({
    where: {
      id: modelId,
    },
  });
  if (!car) {
    throw new Error("Car not found.");
  }

  try {
    const cars = await prisma.carModel.findMany({
      where: {
        id: {
          not: modelId,
        },
        bodyType: car.bodyType,
        brandId: car.brandId,
      },
    });
    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch similar cars.");
  }
}

export async function fetchFilteredCarModels({
  brandSlugs,
  query,
  fuelTypes,
  bodyTypes,
}: {
  brandSlugs?: string[];
  query?: string;
  fuelTypes?: FuelType[];
  bodyTypes?: BodyType[];
}): Promise<CarModel[]> {
  try {
    const cars = await prisma.carModel.findMany({
      where: {
        ...(brandSlugs && brandSlugs.length > 0
          ? {
              brand: {
                slug: {
                  in: brandSlugs,
                },
              },
            }
          : {}),
        ...(query && query.length > 0
          ? {
              name: {
                contains: query,
              },
            }
          : {}),
        ...(fuelTypes && fuelTypes.length > 0
          ? {
              variants: {
                some: {
                  engines: {
                    some: {
                      fuelType: {
                        in: fuelTypes,
                      },
                    },
                  },
                },
              },
            }
          : {}),
        ...(bodyTypes && bodyTypes.length > 0
          ? {
              bodyType: {
                in: bodyTypes,
              },
            }
          : {}),
      },
    });
    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}

export async function fetchFilteredCarModelsAdmin(query: string) {
  try {
    const cars = await prisma.carModel.findMany({
      include: {
        brand: true,
        variants: true,
      },

      where: {
        name: {
          contains: query,
        },
      },
    });
    return cars;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars.");
  }
}

export async function fetchCarModelsCount(brandId: string) {
  try {
    const count = await prisma.carModel.count({
      where: {
        brandId,
      },
    });
    return count;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch cars count.");
  }
}

export async function fetchUniqueFuelTypes(carId: string): Promise<FuelType[]> {
  try {
    const fuelTypes = await prisma.engine.findMany({
      select: {
        fuelType: true,
      },
      where: {
        variants: {
          some: {
            modelId: carId,
          },
        },
      },
      distinct: ["fuelType"],
    });
    return fuelTypes.map((engine) => engine.fuelType);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch unique fuel types.");
  }
}

export async function fetchEnginesByVariantId(variantId: string) {
  try {
    const engines = await prisma.engine.findMany({
      where: {
        variants: {
          some: {
            id: variantId,
          },
        },
      },
    });
    return engines;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch engines.");
  }
}

export async function fetchCarVariantsByModelId(modelId: string) {
  try {
    const variants = await prisma.carVariant.findMany({
      where: {
        modelId,
      },
    });
    return variants;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch car variants.");
  }
}
