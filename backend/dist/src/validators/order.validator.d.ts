import { z } from "zod";
export declare const createOrderSchema: z.ZodObject<{
    body: z.ZodObject<{
        shippingAddress: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        items: z.ZodArray<z.ZodObject<{
            productId: z.ZodString;
            quantity: z.ZodNumber;
        }, z.core.$strip>>;
    }, z.core.$strip>;
}, z.core.$strip>;
//# sourceMappingURL=order.validator.d.ts.map