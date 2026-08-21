import type { RequestHandler } from "express";

export const dashboard: RequestHandler = (_request, response) => {
  response.json({ message: "Admin dashboard" });
};
