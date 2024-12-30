import { carBrandsToImport } from "@/lib/seed-data/brands";
import { engines } from "@/lib/seed-data/engines";
import { carModelsToImport } from "@/lib/seed-data/models";
import { professionalReviews } from "@/lib/seed-data/professional-reviews";
import { variants } from "@/lib/seed-data/variants";
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

  // seed car engines
  const seededEngines = await prisma.engine.createManyAndReturn({
    data: engines,
  });

  // seed car variants
  const seededVariants = [];
  for (const variant of variants) {
    const seededVariant = await prisma.carVariant.create({
      data: variant,
    });
    seededVariants.push(seededVariant);
  }

  // seed reviews
  const seededReviews = await prisma.professionalReview.createManyAndReturn({
    data: professionalReviews,
  });

  console.log("Seeded brands", seededBrands.length);
  console.log("Seeded models", seededModels.length);
  console.log("Seeded engines", seededEngines.length);
  console.log("Seeded variants", seededVariants.length);
  console.log("Seeded reviews", seededReviews.length);
};

seed();
