import axios from 'axios';
import crypto from 'node:crypto';
import { env } from '../config/env.js';
import { prisma } from '../config/database.js';
import AppError from '../utils/AppError.js';
export class PaymentService {
    static async initializePayment(orderId, email, amount) {
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: { items: { include: { product: true } } },
        });
        if (!order) {
            throw new AppError('Order not found', 404);
        }
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: Math.round(amount * 100), // Paystack uses kobo
            reference: order.orderNumber,
            metadata: {
                order_id: orderId,
                cancel_url: `${env.FRONTEND_URL}/checkout/cancel`,
                callback_url: `${env.FRONTEND_URL}/checkout/success`,
            },
        }, {
            headers: {
                Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.data;
    }
    static async verifyPayment(reference) {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${env.PAYSTACK_SECRET_KEY}`,
            },
        });
        const data = response.data.data;
        if (data.status !== 'success') {
            throw new AppError('Payment verification failed', 400);
        }
        const orderId = data.metadata.order_id;
        // Update order status
        await prisma.order.update({
            where: { id: orderId },
            data: {
                status: 'PAID',
                paymentStatus: 'SUCCESS',
                paymentRef: reference,
                paidAt: new Date(),
            },
        });
        // Update product stock
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: { items: true },
        });
        for (const item of order.items) {
            await prisma.product.update({
                where: { id: item.productId },
                data: {
                    stock: {
                        decrement: item.quantity,
                    },
                },
            });
        }
        return data;
    }
    static async handleWebhook(payload, signature) {
        // Verify webhook signature
        const hash = crypto
            .createHmac('sha512', env.PAYSTACK_SECRET_KEY)
            .update(JSON.stringify(payload))
            .digest('hex');
        if (hash !== signature) {
            throw new AppError('Invalid webhook signature', 401);
        }
        if (payload.event === 'charge.success') {
            const reference = payload.data.reference;
            await this.verifyPayment(reference);
        }
        return { success: true };
    }
}
//# sourceMappingURL=payment.service.js.map