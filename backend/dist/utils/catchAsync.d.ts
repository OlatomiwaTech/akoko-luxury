import type { NextFunction, Request, RequestHandler, Response } from "express";
export declare const catchAsync: (handler: (request: Request, response: Response, next: NextFunction) => Promise<unknown>) => RequestHandler;
//# sourceMappingURL=catchAsync.d.ts.map