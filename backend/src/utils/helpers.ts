export const isProduction = (): boolean => process.env.NODE_ENV === "production";

export const toSlug = (value: string): string =>
  value.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
