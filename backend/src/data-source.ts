import "reflect-metadata";
import { DataSource } from "typeorm";
import { CarBrand } from "./entity/CarBrand";
import { CarEngine } from "./entity/CarEngine";
import { CarModel } from "./entity/CarModel";
import { CarModelVariant } from "./entity/CarModelVariant";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [CarBrand, CarModel, CarModelVariant, CarEngine],
  migrations: [],
  subscribers: [],
});
