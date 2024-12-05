import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import { importData } from "./import-data";
import { brandsRouter } from "./routes/brands";
import { modelsRouter } from "./routes/models";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use(brandsRouter);
    app.use(modelsRouter);

    // setup express app here
    // ...

    // start express server
    const PORT = 4000;
    app.listen(PORT);

    await importData();

    console.log(
      `Express server has started on port ${PORT}. Open http://localhost:${PORT}/brands to see results`,
    );
  })
  .catch((error) => console.log(error));
