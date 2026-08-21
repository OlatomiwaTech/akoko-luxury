import type { RequestHandler } from "express";

export const listOrders: RequestHandler = (_request, response) => {
  response.json({ data: [] });
};

export const createOrder: RequestHandler = (_request, response) => {
  response.status(501).json({ message: "Order creation is not implemented yet" });
};
