import express, { Request, Response } from 'express';
import { CarBrand } from '../entity/CarBrand';

const router = express.Router();

// GET /brands
router.get('/brands', async (req: Request, res: Response) => {
    try {
        const brands = await CarBrand.find({
            order: {
                name: 'ASC',
            },
        });
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch car brands' });
    }
});

// GET /brands/:slug
router.get('/brands/:slug', async (req: Request, res: Response) => {
    try {
        const brand = await CarBrand.find({
            relations: {
                models: true,
            },
            where: {
                slug: req.params.slug,
            },
        });
        if (!brand) {
            return res.status(404).json({ message: 'Car brand not found' });
        }
        res.json(brand);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch car brand' });
    }
});

export { router as brandsRouter };
