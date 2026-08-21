import { prisma } from "../config/database.js";

const cartInclude = { items: { include: { product: true } } } as const;

export class CartService {
  static async getCart(userId: string) {
    return prisma.cart.findUnique({ where: { userId }, include: cartInclude });
  }

  static async addToCart(userId: string, productId: string, quantity: number) {
    const cart = await prisma.cart.upsert({ where: { userId }, create: { userId }, update: {} });
    await prisma.cartItem.upsert({
      where: { cartId_productId: { cartId: cart.id, productId } },
      create: { cartId: cart.id, productId, quantity },
      update: { quantity: { increment: quantity } },
    });
    return this.getCart(userId);
  }

  static async updateQuantity(userId: string, productId: string, quantity: number) {
    const cart = await prisma.cart.findUniqueOrThrow({ where: { userId } });
    await prisma.cartItem.update({ where: { cartId_productId: { cartId: cart.id, productId } }, data: { quantity } });
    return this.getCart(userId);
  }

  static async removeFromCart(userId: string, productId: string) {
    const cart = await prisma.cart.findUniqueOrThrow({ where: { userId } });
    await prisma.cartItem.delete({ where: { cartId_productId: { cartId: cart.id, productId } } });
    return this.getCart(userId);
  }
}