import { Router } from "express";
import { getProduct, listProducts } from "../controllers/product.controller.js";
import { ProductController } from "../controllers/product.controller.js";
import { validate } from "../middleware/validation.middleware.js";
import { productIdSchema } from "../validators/product.validator.js";

export const productRouter = Router();
productRouter.get("/", listProducts);
productRouter.get("/slug/:slug", ProductController.getBySlug);
productRouter.get("/:id", validate(productIdSchema), getProduct);
