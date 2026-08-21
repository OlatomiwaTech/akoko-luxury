import { z } from "zod";
export const createOrderSchema = z.object({
    body: z.object({
        shippingAddress: z.record(z.string(), z.unknown()),
        items: z.array(z.object({ productId: z.string().uuid(), quantity: z.number().int().positive() })).min(1),
    }),
});
//# sourceMappingURL=order.validator.js.map