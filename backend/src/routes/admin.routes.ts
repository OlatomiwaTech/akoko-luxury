import { Router } from "express";
import { dashboard } from "../controllers/admin.controller.js";
import { requireAdmin, requireAuth } from "../middleware/auth.middleware.js";

export const adminRouter = Router();
adminRouter.use(requireAuth, requireAdmin);
adminRouter.get("/", dashboard);
