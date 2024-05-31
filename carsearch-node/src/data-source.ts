import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CarBrand } from './entity/CarBrand';
import { CarModel } from './entity/CarModel';
import { CarGeneration } from './entity/CarGeneration';
import { CarEngingeOption } from './entity/CarEngineOption';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'cardb',
    synchronize: true,
    logging: false,
    entities: [CarBrand, CarModel, CarGeneration, CarEngingeOption],
    migrations: [],
    subscribers: [],
});
