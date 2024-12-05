import { NextFunction, Request, Response } from "express";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey) {
    return res
      .status(401)
      .json({ message: "Unauthorized: No API key provided" });
  }

  // Here you can add your logic to validate the API key
  // For example, you can check if the API key is valid by comparing it with a predefined key
  const validApiKey = process.env.FRONTEND_API_KEY;
  if (apiKey !== validApiKey) {
    return res.status(401).json({ message: "Unauthorized: Invalid API key" });
  }

  next();
};

export default authMiddleware;
