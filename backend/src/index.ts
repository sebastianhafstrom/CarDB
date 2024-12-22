import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import session from "express-session";
import { Client } from "pg"; // Import the pg Client
import { AppDataSource } from "./data-source";
import { importData } from "./import-data";
import { adminRouter } from "./routes/admin/admin";
import { authRouter } from "./routes/auth/auth";
import { brandsRouter } from "./routes/brands/brands";
import { modelsRouter } from "./routes/models/models";

require("dotenv").config();

var cookieParser = require("cookie-parser");
const PgSession = require("connect-pg-simple")(session);
const isProduction = process.env.NODE_ENV === "production";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(
      cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["*"],
        allowedHeaders: ["Content-Type"],
        credentials: true, // Required to allow cookies
      }),
    );

    // Extract PostgreSQL connection options from TypeORM DataSource
    const connectionOptions = AppDataSource.options;

    // Create pg client using TypeORM connection details
    const pgClient = new Client({
      connectionString: process.env.DATABASE_URL, // Use the same DATABASE_URL from your .env
      ssl: isProduction ? { rejectUnauthorized: false } : false, // Adjust SSL settings based on production
    });

    // Connect the pg client
    await pgClient.connect();

    // Use express-session middleware with connect-pg-simple as the store
    app.use(
      session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
          httpOnly: true,
          secure: isProduction, // Use true only in production
          sameSite: isProduction ? "none" : "lax", // Use "none" for cross-origin in production
          maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
        store: new PgSession({
          pool: pgClient, // Use the pg client
          tableName: "session",
          createTableIfMissing: true,
        }),
      }),
    );

    // Error handling middleware
    app.use((err, _req, res, _next) => {
      console.error(err.stack);
      res.status(err.status || 500).json({
        error: err.message || "Internal Server Error",
      });
    });

    // Middleware to reset session expiry on every request
    app.use((req, res, next) => {
      if (req.session.userId) {
        req.session.cookie.maxAge = 24 * 60 * 60 * 1000; // reset session expiry to 24 hours
      }
      next();
    });

    app.use(brandsRouter);
    app.use(modelsRouter);
    app.use(authRouter);
    app.use(adminRouter);

    // setup express app here
    // ...

    // start express server
    const PORT = 4000;
    app.listen(PORT);

    await importData();

    if (isProduction) {
      console.log("Running in production mode");
    } else {
      console.log(`Running in ${process.env.NODE_ENV || "development"} mode`);
    }

    console.log(`Express server has started`);
  })
  .catch((error) => console.log(error));
