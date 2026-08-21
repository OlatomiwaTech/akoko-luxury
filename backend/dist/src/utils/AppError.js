export class AppError extends Error {
    statusCode;
    constructor(messageOrStatus, statusOrMessage) {
        const message = typeof messageOrStatus === "string" ? messageOrStatus : statusOrMessage;
        super(message);
        this.statusCode = typeof messageOrStatus === "number" ? messageOrStatus : statusOrMessage;
        this.name = "AppError";
    }
}
export default AppError;
//# sourceMappingURL=AppError.js.map