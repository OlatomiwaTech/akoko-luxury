export const catchAsync = (handler) => (request, response, next) => {
    void handler(request, response, next).catch(next);
};
//# sourceMappingURL=catchAsync.js.map