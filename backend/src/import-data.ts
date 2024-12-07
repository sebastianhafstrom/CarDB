import { In } from "typeorm";
import { carBrandsToImport } from "../dataimport/brands";
import { engines } from "../dataimport/engines";
import { models } from "../dataimport/models";

import { professionalReviews } from "../dataimport/professional-reviews";
import { userReviews } from "../dataimport/user-reviews";
import { variants } from "../dataimport/variants";
import { CarBrand } from "./entity/CarBrand";
import { CarEngine } from "./entity/CarEngine";
import { CarModel } from "./entity/CarModel";
import { CarModelVariant } from "./entity/CarModelVariant";
import { ProfessionalReview } from "./entity/ProfessionalReview";
import { UserReview } from "./entity/UserReview";

export const importData = async () => {
  for (const brand of carBrandsToImport) {
    const carBrand = new CarBrand();
    carBrand.id = brand.id;
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
    carModel.id = model.id;
    carModel.name = model.name;
    carModel.slug = model.slug;
    carModel.website = model.website;
    carModel.imageUrl = model.imageUrl;
    carModel.bodyType = model.bodyType;
    carModel.brand = brand;
    await carModel.save();

    console.log(`Created model: ${model.name}`);
  }

  for (const engine of engines) {
    const carEngine = new CarEngine();
    carEngine.id = engine.id;
    carEngine.name = engine.name;
    carEngine.fuelType = engine.fuelType;
    carEngine.power = engine.power;
    await carEngine.save();
    console.log(`Created engine: ${engine.name}`);
  }

  for (const variant of variants) {
    const model = await CarModel.findOneBy({ id: variant.modelId });
    const engines = await CarEngine.findBy({ id: In(variant.engineIds) });
    const carModelVariant = new CarModelVariant();
    carModelVariant.id = variant.id;
    carModelVariant.name = variant.name;
    carModelVariant.model = model;
    carModelVariant.engines = engines;
    await carModelVariant.save();
    console.log(`Created variant: ${variant.name}`);
  }

  for (const review of userReviews) {
    const model = await CarModel.findOneBy({ id: review.carModelId });
    const carReview = new UserReview();
    carReview.title = review.title;
    carReview.content = review.content;
    carReview.rating = review.rating;
    carReview.carModel = model;
    await carReview.save();
    console.log(`Created review: ${review.title}`);
  }

  for (const review of professionalReviews) {
    const model = await CarModel.findOneBy({ id: review.carModelId });
    const carReview = new ProfessionalReview();
    carReview.title = review.title;
    carReview.date = review.date;
    carReview.website = review.website;
    carReview.carModel = model;
    carReview.content = review.content;
    carReview.rating = review.rating;
    await carReview.save();
    console.log(`Created review: ${review.title}`);
  }
};
