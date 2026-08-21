import "dotenv/config";
const required = (name) => {
    const value = process.env[name];
    if (!value)
        throw new Error(`Missing required environment variable: ${name}`);
    return value;
};
export const env = {
    nodeEnv: process.env.NODE_ENV ?? "development",
    port: Number(process.env.PORT ?? 4000),
    databaseUrl: required("DATABASE_URL"),
    clientUrl: process.env.CLIENT_URL ?? "http://localhost:3000",
    jwtSecret: process.env.JWT_SECRET ?? "development-secret",
    JWT_SECRET: process.env.JWT_SECRET ?? "development-secret",
    FRONTEND_URL: process.env.FRONTEND_URL ?? process.env.CLIENT_URL ?? "http://localhost:3000",
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY ?? "",
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};
//# sourceMappingURL=env.js.map