import express from 'express';
import bodyParser from 'body-parser';
import { AppDataSource } from './data-source';
import { CarBrand } from './entity/CarBrand';
import { brandsRouter } from './routes/brands';
import { carBrandsToImport } from '../dataimport/brands';
import { skodaModelsToImport } from '../dataimport/skodaModels';
import { CarModel } from './entity/CarModel';
import { modelsRouter } from './routes/models';
import { BodyType } from './types';
import { skodaOctaviaCombiGenerations } from '../dataimport/skodaOctaviaCombiGenerations';
import { CarGeneration } from './entity/CarGeneration';

AppDataSource.initialize()
    .then(async () => {
        // create express app
        const app = express();
        app.use(bodyParser.json());

        app.use(brandsRouter);
        app.use(modelsRouter);

        // setup express app here
        // ...

        // start express server
        app.listen(3000);

        carBrandsToImport.forEach(async (brand) => {
            if (!(await CarBrand.existsBy({ slug: brand.slug }))) {
                const carBrand = new CarBrand();
                carBrand.name = brand.name;
                carBrand.slug = brand.slug;
                carBrand.country = brand.country;
                carBrand.website = brand.website;
                await carBrand.save();
                console.log(`Created brand: ${brand.name}`);
            }
        });

        const skodaBrand = await CarBrand.findOneBy({ slug: 'skoda' });

        skodaModelsToImport.forEach(async (model) => {
            if (!(await CarModel.existsBy({ slug: model.slug }))) {
                const carModel = new CarModel();
                carModel.name = model.name;
                carModel.slug = model.slug;
                carModel.bodyType = model.bodyType as BodyType;
                carModel.brand = skodaBrand;
                await carModel.save();
                console.log(`Created model: ${model.name}`);
            }
        });

        const skodaOctaviaCombiModel = await CarModel.findOneBy({ slug: 'octavia' });

        skodaOctaviaCombiGenerations.forEach(async (generation) => {
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
        });

        console.log(
            'Express server has started on port 3000. Open http://localhost:3000/brands to see results'
        );
    })
    .catch((error) => console.log(error));
