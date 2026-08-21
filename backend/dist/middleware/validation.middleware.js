import { AppError } from "../utils/AppError.js";
export const validate = (schema) => (request, _response, next) => {
    const result = schema.safeParse({ body: request.body, params: request.params, query: request.query });
    if (!result.success)
        return next(new AppError(400, result.error.issues[0]?.message ?? "Invalid request"));
    request.body = result.data.body;
    next();
};
//# sourceMappingURL=validation.middleware.js.map