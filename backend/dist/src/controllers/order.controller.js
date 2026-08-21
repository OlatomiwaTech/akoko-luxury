export const listOrders = (_request, response) => {
    response.json({ data: [] });
};
export const createOrder = (_request, response) => {
    response.status(501).json({ message: "Order creation is not implemented yet" });
};
//# sourceMappingURL=order.controller.js.map