import { carBrandsToImport } from "@/lib/seed-data/brands";
import { carModelsToImport } from "@/lib/seed-data/models";
import { professionalReviews } from "@/lib/seed-data/professional-reviews";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  // seed brands
  const seededBrands = await prisma.carBrand.createManyAndReturn({
    data: carBrandsToImport,
  });
  // seed car models
  const seededModels = await prisma.carModel.createManyAndReturn({
    data: carModelsToImport,
  });
  // seed reviews
  const seededReviews = await prisma.professionalReview.createManyAndReturn({
    data: professionalReviews,
  });
};

seed();
