export const isProduction = () => process.env.NODE_ENV === "production";
export const toSlug = (value) => value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
//# sourceMappingURL=helpers.js.map