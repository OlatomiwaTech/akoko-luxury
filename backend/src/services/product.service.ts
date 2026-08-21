import { prisma } from "../config/database.js";

interface ProductFilters {
	page: number;
	limit: number;
	collection?: string;
	minPrice?: number;
	maxPrice?: number;
	sort: string;
	order: "asc" | "desc";
	search?: string;
}

export class ProductService {
	static async getAll(filters: ProductFilters) {
		const where = {
			isActive: true,
			...(filters.collection && { collection: { slug: filters.collection } }),
			...(filters.minPrice !== undefined && { price: { gte: filters.minPrice } }),
			...(filters.maxPrice !== undefined && { price: { lte: filters.maxPrice } }),
			...(filters.search && { name: { contains: filters.search, mode: "insensitive" as const } }),
		};
		const skip = Math.max(filters.page - 1, 0) * filters.limit;
		const [products, total] = await Promise.all([
			prisma.product.findMany({ where, skip, take: filters.limit, orderBy: { [filters.sort]: filters.order }, include: { collection: true } }),
			prisma.product.count({ where }),
		]);
		return { products, total, page: filters.page, pages: Math.ceil(total / filters.limit) };
	}

	static getBySlug(slug: string) {
		return prisma.product.findUniqueOrThrow({ where: { slug, isActive: true }, include: { collection: true } });
	}

	static getFeatured() {
		return prisma.product.findMany({ where: { isActive: true, isFeatured: true }, include: { collection: true } });
	}

	static getCollections() {
		return prisma.collection.findMany({ where: { isActive: true }, include: { products: { where: { isActive: true } } } });
	}
}
