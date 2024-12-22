import express from "express";
import { Like } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "../../entity/auth/user";
import { CarBrand } from "../../entity/CarBrand";
import { CarModel } from "../../entity/CarModel";
import { requireAuth } from "../../middlewares/requireAuth";

const router = express.Router();

router.get("/admin/brands", requireAuth, async (req, res) => {
  // Fetch all brands
  res.json([]);
});

router.get("/admin/brands/:slug", requireAuth, async (req, res) => {
  // Fetch a brand
  res.json({});
});

router.post("/admin/brands", requireAuth, async (req, res) => {
  // Create a new brand
  const { name, country, website, slug } = req.body;
  const brand = new CarBrand();
  brand.id = uuid();
  brand.name = name;
  brand.country = country;
  brand.website = website;
  brand.slug = slug;
  await brand.save();
  res.json(brand);
});

router.put("/admin/brands/:slug", requireAuth, async (req, res) => {
  // Update a brand
});

router.get("/admin/models", requireAuth, async (req, res) => {
  // Fetch all models
  const search = req.query.search as string;
  const models = await CarModel.find({
    relations: {
      brand: true,
    },
    where: {
      name: Like(`%${search as string}%`),
    },
  });
  res.json(models);
});

router.get("/admin/models/:slug", requireAuth, async (req, res) => {
  // Fetch a model
  res.json({});
});

router.post("/admin/models", requireAuth, async (req, res) => {
  // Create a new model

  const {
    name,
    brandId,
    slug,
    bodyType,
    website,
    imageUrl,
    length,
    width,
    height,
    wheelbase,
  } = req.body;

  const brand = await CarBrand.findOneBy({ id: brandId });

  const model = new CarModel();
  model.id = uuid();
  model.name = name;
  model.slug = slug;
  model.website = website;
  model.imageUrl = imageUrl;
  model.bodyType = bodyType;
  model.brand = brand;
  model.length = length;
  model.width = width;
  model.height = height;
  model.wheelbase = wheelbase;
  await model.save();
  res.json(model);
});

router.put("/admin/models/:slug", requireAuth, async (req, res) => {
  // Update a model
});

router.delete("/admin/models/:slug", requireAuth, async (req, res) => {
  // Delete a model
});

router.post("/admin/models/:sliug/review", requireAuth, async (req, res) => {
  // Create a new review
});

router.put("/admin/models/:slug/review/:id", requireAuth, async (req, res) => {
  // Update a review
});

router.delete(
  "/admin/models/:slug/review/:id",
  requireAuth,
  async (req, res) => {
    // Delete a review
  },
);

router.post("/admin/models/:slug/variant", requireAuth, async (req, res) => {
  // Create a new variant
});

router.put("/admin/models/:slug/variant/:id", requireAuth, async (req, res) => {
  // Update a variant
});

router.delete(
  "/admin/models/:slug/variant/:id",
  requireAuth,
  async (req, res) => {
    // Delete a variant
  },
);

router.post(
  "/admin/models/:slug/variant/:id/engine",
  requireAuth,
  async (req, res) => {
    // Create a new engine
  },
);

router.put(
  "/admin/models/:slug/variant/:id/engine/:id",
  requireAuth,
  async (req, res) => {
    // Update an engine
  },
);

router.delete(
  "/admin/models/:slug/variant/:id/engine/:id",
  requireAuth,
  async (req, res) => {
    // Delete an engine
  },
);

router.get("/admin/users", requireAuth, async (req, res) => {
  // Fetch all users

  const users = await User.find();
  users.forEach((user) => {
    delete user.password;
  });

  res.json(users);
});

export { router as adminRouter };
