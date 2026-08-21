import type { RequestHandler } from "express";

export const getCart: RequestHandler = (_request, response) => {
  response.json({ data: null });
};
