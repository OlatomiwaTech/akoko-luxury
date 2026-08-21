export declare class PaymentService {
    static initializePayment(orderId: string, email: string, amount: number): Promise<any>;
    static verifyPayment(reference: string): Promise<any>;
    static handleWebhook(payload: any, signature: string): Promise<{
        success: boolean;
    }>;
}
//# sourceMappingURL=payment.service.d.ts.map