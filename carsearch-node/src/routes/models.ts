import express, { Request, Response } from 'express';
import { CarModel } from '../entity/CarModel';

const router = express.Router();

// GET /carModels
router.get('/models', async (req: Request, res: Response) => {
    try {
        const carModels = await CarModel.find({
            relations: {
                brand: true,
            },
        });
        res.json(carModels);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// GET /carModels/:id
router.get('/models/:slug', async (req: Request, res: Response) => {
    try {
        const carModel = await CarModel.find({
            relations: {
                brand: true,
                generations: {
                    engineOptions: true,
                },
            },
            where: {
                slug: req.params.slug,
            },
        });
        if (!carModel) {
            return res.status(404).json({ message: 'Car model not found' });
        }
        res.json(carModel);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export { router as modelsRouter };
