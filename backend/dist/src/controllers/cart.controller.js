import { CartService } from "../services/cart.service.js";
import { catchAsync } from "../utils/catchAsync.js";
export class CartController {
    static getCart = catchAsync(async (req, res) => {
        const cart = await CartService.getCart(req.user.id);
        res.json({
            success: true,
            cart,
        });
    });
    static addToCart = catchAsync(async (req, res) => {
        const { productId, quantity = 1 } = req.body;
        const cart = await CartService.addToCart(req.user.id, productId, quantity);
        res.json({
            success: true,
            message: 'Product added to cart',
            cart,
        });
    });
    static updateQuantity = catchAsync(async (req, res) => {
        const { productId, quantity } = req.body;
        const cart = await CartService.updateQuantity(req.user.id, productId, quantity);
        res.json({
            success: true,
            message: 'Cart updated',
            cart,
        });
    });
    static removeFromCart = catchAsync(async (req, res) => {
        const { productId } = req.params;
        if (typeof productId !== 'string')
            return res.status(400).json({ message: 'A product id is required' });
        const cart = await CartService.removeFromCart(req.user.id, productId);
        res.json({
            success: true,
            message: 'Product removed from cart',
            cart,
        });
    });
}
export const getCart = CartController.getCart;
//# sourceMappingURL=cart.controller.js.map