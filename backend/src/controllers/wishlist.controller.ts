import type { RequestHandler } from "express";

export const getWishlist: RequestHandler = (_request, response) => {
  response.json({ data: [] });
};
