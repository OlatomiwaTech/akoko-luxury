import { z } from "zod";
export const productIdSchema = z.object({
    params: z.object({ id: z.string().uuid() }),
});
//# sourceMappingURL=product.validator.js.map