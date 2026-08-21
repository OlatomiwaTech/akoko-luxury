import { z } from "zod";
export const registerSchema = z.object({
    body: z.object({ email: z.email(), password: z.string().min(8) }),
});
export const loginSchema = z.object({
    body: z.object({ email: z.email(), password: z.string().min(1) }),
});
//# sourceMappingURL=auth.validator.js.map