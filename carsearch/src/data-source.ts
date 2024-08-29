import "reflect-metadata";
import { DataSource } from "typeorm";
import { CarBrand } from "./entity/CarBrand";
import { CarModel } from "./entity/CarModel";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "password",
  database: "cardb",
  synchronize: true,
  logging: false,
  entities: [CarBrand, CarModel],
  migrations: [],
  subscribers: [],
});
