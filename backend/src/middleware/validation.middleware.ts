import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { AppError } from "../utils/AppError.js";

export const validate = (schema: ZodType): RequestHandler => (request, _response, next) => {
  const result = schema.safeParse({ body: request.body, params: request.params, query: request.query });
  if (!result.success) return next(new AppError(400, result.error.issues[0]?.message ?? "Invalid request"));
  request.body = result.data.body;
  next();
};
