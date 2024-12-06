import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import { importData } from "./import-data";
import authMiddleware from "./middlewares/auth";
import { brandsRouter } from "./routes/brands";
import { modelsRouter } from "./routes/models";

require("dotenv").config();

const coreConfig = {
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "OPTIONS"],
  allowedHeaders: ["x-api-key"],
};

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors(coreConfig));

    console.log("cors", coreConfig);

    app.use(authMiddleware);
    app.use((err, _req, res, _next) => {
      console.error(err.stack);
      res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
      });
    });

    app.use(brandsRouter);
    app.use(modelsRouter);

    // setup express app here
    // ...

    // start express server
    const PORT = 4000;
    app.listen(PORT);

    await importData();

    if (process.env.NODE_ENV === "production") {
      console.log("Running in production mode");
    } else {
      console.log(`Running in ${process.env.NODE_ENV || "development"} mode`);
    }

    console.log(`Express server has started`);
  })
  .catch((error) => console.log(error));
