import "reflect-metadata";
import { DataSource } from "typeorm";
import { CarBrand } from "./entity/CarBrand";
import { CarEngine } from "./entity/CarEngine";
import { CarModel } from "./entity/CarModel";
import { CarModelVariant } from "./entity/CarModelVariant";
import { ProfessionalReview } from "./entity/ProfessionalReview";
import { UserReview } from "./entity/UserReview";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [
    CarBrand,
    CarModel,
    CarModelVariant,
    CarEngine,
    UserReview,
    ProfessionalReview,
  ],
  migrations: [],
  subscribers: [],
});
