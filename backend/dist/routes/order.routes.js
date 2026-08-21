import { Router } from "express";
import { createOrder, listOrders } from "../controllers/order.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";
import { createOrderSchema } from "../validators/order.validator.js";
export const orderRouter = Router();
orderRouter.use(requireAuth);
orderRouter.get("/", listOrders);
orderRouter.post("/", validate(createOrderSchema), createOrder);
//# sourceMappingURL=order.routes.js.map