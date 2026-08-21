import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import AppError from "../utils/AppError.js";
export const protect = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return next(new AppError('Not authenticated. Please log in.', 401));
    }
    try {
        const decoded = jwt.verify(token, env.JWT_SECRET);
        req.user = {
            id: decoded.userId,
            role: decoded.role,
        };
        next();
    }
    catch (error) {
        return next(new AppError('Invalid token. Please log in again.', 401));
    }
};
export const adminOnly = (req, res, next) => {
    if (req.user?.role !== 'ADMIN') {
        return next(new AppError('Admin access required', 403));
    }
    next();
};
export const requireAuth = protect;
export const requireAdmin = adminOnly;
//# sourceMappingURL=auth.middleware.js.map