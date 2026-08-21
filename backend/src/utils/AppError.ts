export class AppError extends Error {
  public readonly statusCode: number;

  constructor(messageOrStatus: string | number, statusOrMessage: number | string) {
    const message = typeof messageOrStatus === "string" ? messageOrStatus : statusOrMessage as string;
    super(message);
    this.statusCode = typeof messageOrStatus === "number" ? messageOrStatus : statusOrMessage as number;
    this.name = "AppError";
  }
}

export default AppError;
