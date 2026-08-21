import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { AppError } from "../utils/AppError.js";
export const requireAuth = (request, _response, next) => {
    const token = request.headers.authorization?.replace("Bearer ", "");
    if (!token)
        return next(new AppError(401, "Authentication required"));
    try {
        const payload = jwt.verify(token, env.jwtSecret);
        if (!payload.sub || !payload.role)
            return next(new AppError(401, "Invalid authentication token"));
        request.user = { id: payload.sub, role: payload.role };
        next();
    }
    catch {
        next(new AppError(401, "Invalid authentication token"));
    }
};
export const requireAdmin = (request, _response, next) => {
    if (request.user?.role !== "ADMIN")
        return next(new AppError(403, "Admin access required"));
    next();
};
//# sourceMappingURL=auth.middleware.js.map