import type { NextFunction, Request, Response } from "express";
import type { Role } from "@prisma/client";
export interface AuthRequest extends Request {
    user?: {
        id: string;
        role: Role;
    };
}
export declare const protect: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const adminOnly: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireAuth: (req: AuthRequest, res: Response, next: NextFunction) => void;
export declare const requireAdmin: (req: AuthRequest, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.middleware.d.ts.map