import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { apiRateLimiter } from "./middleware/rateLimiter.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { authRouter } from "./routes/auth.routes.js";
import { productRouter } from "./routes/product.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { cartRouter } from "./routes/cart.routes.js";
import { adminRouter } from "./routes/admin.routes.js";
const app = express();
app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(apiRateLimiter);
app.get("/health", (_request, response) => {
    response.json({ status: "ok" });
});
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use("/api/cart", cartRouter);
app.use("/api/admin", adminRouter);
app.use(errorMiddleware);
app.listen(env.port, () => {
    console.log(`Akoko API listening on port ${env.port}`);
});
export { app };
//# sourceMappingURL=server.js.map