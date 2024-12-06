import "reflect-metadata";
import { DataSource } from "typeorm";
import { CarBrand } from "./entity/CarBrand";
import { CarEngine } from "./entity/CarEngine";
import { CarModel } from "./entity/CarModel";
import { CarModelVariant } from "./entity/CarModelVariant";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "password",
  database: "cardb",
  synchronize: true,
  dropSchema: true,
  logging: false,
  entities: [CarBrand, CarModel, CarModelVariant, CarEngine],
  migrations: [],
  subscribers: [],
});
/* export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "cardb.sqlite",
  synchronize: true,
  logging: false,
  entities: [CarBrand, CarModel, CarModelVariant, Engine],
  migrations: [],
  subscribers: [],
  dropSchema: true,
}); */
