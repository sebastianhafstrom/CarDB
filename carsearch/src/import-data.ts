import { carBrandsToImport } from "../dataimport/brands";
import { skodaModelsToImport } from "../dataimport/skodaModels";
import { skodaOctaviaCombiGenerations } from "../dataimport/skodaOctaviaCombiGenerations";
import { CarBrand } from "./entity/CarBrand";
import { CarGeneration } from "./entity/CarGeneration";
import { CarModel } from "./entity/CarModel";
import { BodyType } from "./types";

export const importData = async () => {
  for (const brand of carBrandsToImport) {
    if (!(await CarBrand.existsBy({ slug: brand.slug }))) {
      const carBrand = new CarBrand();
      carBrand.name = brand.name;
      carBrand.slug = brand.slug;
      carBrand.country = brand.country;
      carBrand.website = brand.website;
      await carBrand.save();
      console.log(`Created brand: ${brand.name}`);
    }
  }

  const skodaBrand = await CarBrand.findOneBy({ slug: "skoda" });

  for (const model of skodaModelsToImport) {
    if (!(await CarModel.existsBy({ slug: model.slug }))) {
      const carModel = new CarModel();
      carModel.name = model.name;
      carModel.slug = model.slug;
      carModel.bodyType = model.bodyType as BodyType;
      carModel.brand = skodaBrand;
      await carModel.save();
      console.log(`Created model: ${model.name}`);
    }
  }

  const skodaOctaviaCombiModel = await CarModel.findOneBy({
    slug: "octavia",
  });

  for (const generation of skodaOctaviaCombiGenerations) {
    if (!(await CarGeneration.existsBy({ name: generation.name }))) {
      const carGeneration = new CarGeneration();
      carGeneration.name = generation.name;
      carGeneration.startYear = generation.startYear;
      carGeneration.endYear = generation.endYear;
      carGeneration.length = generation.length;
      carGeneration.width = generation.width;
      carGeneration.height = generation.height;
      carGeneration.groundClearance = generation.groundClearance;
      carGeneration.cargoVolume = generation.cargoVolume;
      carGeneration.model = skodaOctaviaCombiModel;
      await carGeneration.save();
      console.log(`Created generation: ${generation.name}`);
    }
  }
};
