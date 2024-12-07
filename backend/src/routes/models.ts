import express, { Request, Response } from "express";
import { In, Like } from "typeorm";
import { CarModel } from "../entity/CarModel";
import { BodyType } from "../types";

const router = express.Router();

// GET /carModels
router.get("/models", async (req: Request, res: Response) => {
  var search = req.query.search;
  if (!search) {
    search = "";
  }
  var bodyTypes = req.query.bodyTypes;
  if (!bodyTypes) {
    bodyTypes = Object.values(BodyType); // List all enum values if bodyTypes is not provided
  } else if (typeof bodyTypes === "string") {
    bodyTypes = bodyTypes.split(",");
  }

  try {
    const carModels = await CarModel.find({
      relations: {
        brand: true,
      },
      where: {
        name: Like(`%${search as string}%`),
        bodyType: In(bodyTypes as string[]),
      },
    });
    res.json(carModels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /carModels/:id
router.get("/models/:slug", async (req: Request, res: Response) => {
  try {
    const carModel = await CarModel.findOne({
      relations: {
        brand: true,
        variants: {
          engines: true,
        },
        userReviews: true,
        professionalReviews: true,
      },
      where: {
        slug: req.params.slug,
      },
    });
    if (!carModel) {
      res.status(404).json({ message: "Car model not found" });
    } else {
      res.json(carModel);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as modelsRouter };
