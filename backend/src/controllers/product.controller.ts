import type { Request, Response } from "express";
import { prisma } from "../config/database.js";
import { ProductService } from "../services/product.service.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

export class ProductController {
  static getAll = catchAsync(async (req: Request, res: Response) => {
    const {
      page = '1',
      limit = '12',
      collection,
      minPrice,
      maxPrice,
      sort = 'createdAt',
      order = 'desc',
      search,
    } = req.query;

    const products = await ProductService.getAll({
      page: Number(page),
      limit: Number(limit),
      ...(typeof collection === 'string' && { collection }),
      ...(typeof minPrice === 'string' && { minPrice: Number(minPrice) }),
      ...(typeof maxPrice === 'string' && { maxPrice: Number(maxPrice) }),
      sort: sort as string,
      order: order as 'asc' | 'desc',
      ...(typeof search === 'string' && { search }),
    });

    res.json({
      success: true,
      ...products,
    });
  });

  static getBySlug = catchAsync(async (req: Request, res: Response) => {
    const { slug } = req.params;
    if (typeof slug !== "string") {
      throw new AppError("A product slug is required", 400);
    }

    const product = await prisma.product.findUnique({
      where: { slug, isActive: true },
      include: { collection: true },
    });

    if (!product) {
      throw new AppError("Product not found", 404);
    }

    const relatedProducts = await prisma.product.findMany({
      where: {
        collectionId: product.collectionId,
        id: { not: product.id },
        isActive: true,
      },
      take: 3,
    });

    res.json({ success: true, product, relatedProducts });
  });

  static getFeatured = catchAsync(async (req: Request, res: Response) => {
    const products = await ProductService.getFeatured();
    
    res.json({
      success: true,
      products,
    });
  });

  static getCollections = catchAsync(async (req: Request, res: Response) => {
    const collections = await ProductService.getCollections();
    
    res.json({
      success: true,
      collections,
    });
  });
}

export const listProducts = ProductController.getAll;
export const getProduct = ProductController.getBySlug;