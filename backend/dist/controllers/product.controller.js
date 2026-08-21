export const listProducts = (_request, response) => {
    response.json({ data: [] });
};
export const getProduct = (_request, response) => {
    response.status(501).json({ message: "Product lookup is not implemented yet" });
};
//# sourceMappingURL=product.controller.js.map