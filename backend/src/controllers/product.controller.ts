import type { RequestHandler } from "express";

export const listProducts: RequestHandler = (_request, response) => {
  response.json({ data: [] });
};

export const getProduct: RequestHandler = (_request, response) => {
  response.status(501).json({ message: "Product lookup is not implemented yet" });
};
