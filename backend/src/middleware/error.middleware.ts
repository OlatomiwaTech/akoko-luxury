import type { ErrorRequestHandler } from "express";
import { AppError } from "../utils/AppError.js";

export const errorMiddleware: ErrorRequestHandler = (error, _request, response, _next) => {
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  const message = error instanceof Error ? error.message : "Internal server error";
  response.status(statusCode).json({ success: false, message });
};
