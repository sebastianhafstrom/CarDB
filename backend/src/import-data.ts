import { carBrandsToImport } from "../dataimport/brands";
import { models } from "../dataimport/models";
import { CarBrand } from "./entity/CarBrand";
import { CarModel } from "./entity/CarModel";
import { BodyType } from "./types";

export const importData = async () => {
  for (const brand of carBrandsToImport) {
    const carBrand = new CarBrand();
    carBrand.name = brand.name;
    carBrand.slug = brand.slug;
    carBrand.country = brand.country;
    carBrand.website = brand.website;
    await carBrand.save();
    console.log(`Created brand: ${brand.name}`);
  }

  for (const model of models) {
    const brand = await CarBrand.findOneBy({ slug: model.brand });
    const carModel = new CarModel();
    carModel.name = model.name;
    carModel.slug = model.slug;
    carModel.website = model.website;
    carModel.imageUrl = model.imageUrl;
    carModel.bodyType = model.bodyType as BodyType;
    carModel.brand = brand;
    await carModel.save();
    console.log(`Created model: ${model.name}`);
  }
};
