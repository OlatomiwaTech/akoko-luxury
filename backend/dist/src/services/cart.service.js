import { prisma } from "../config/database.js";
const cartInclude = { items: { include: { product: true } } };
export class CartService {
    static async getCart(userId) {
        return prisma.cart.findUnique({ where: { userId }, include: cartInclude });
    }
    static async addToCart(userId, productId, quantity) {
        const cart = await prisma.cart.upsert({ where: { userId }, create: { userId }, update: {} });
        await prisma.cartItem.upsert({
            where: { cartId_productId: { cartId: cart.id, productId } },
            create: { cartId: cart.id, productId, quantity },
            update: { quantity: { increment: quantity } },
        });
        return this.getCart(userId);
    }
    static async updateQuantity(userId, productId, quantity) {
        const cart = await prisma.cart.findUniqueOrThrow({ where: { userId } });
        await prisma.cartItem.update({ where: { cartId_productId: { cartId: cart.id, productId } }, data: { quantity } });
        return this.getCart(userId);
    }
    static async removeFromCart(userId, productId) {
        const cart = await prisma.cart.findUniqueOrThrow({ where: { userId } });
        await prisma.cartItem.delete({ where: { cartId_productId: { cartId: cart.id, productId } } });
        return this.getCart(userId);
    }
}
//# sourceMappingURL=cart.service.js.map