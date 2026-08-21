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
export declare class ProductService {
    static getAll(filters: ProductFilters): Promise<{
        products: ({
            collection: {
                id: string;
                createdAt: Date;
                name: string;
                description: string | null;
                slug: string;
                isActive: boolean;
                image: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            slug: string;
            shortDesc: string | null;
            price: number;
            comparePrice: number | null;
            collectionId: string;
            movement: string;
            caseSize: string;
            caseMaterial: string;
            dialColor: string;
            waterResistance: string;
            strapMaterial: string;
            strapColor: string;
            stock: number;
            sku: string;
            images: string[];
            mainImage: string;
            isNew: boolean;
            isFeatured: boolean;
            isLimited: boolean;
            isActive: boolean;
        })[];
        total: number;
        page: number;
        pages: number;
    }>;
    static getBySlug(slug: string): import("@prisma/client").Prisma.Prisma__ProductClient<{
        collection: {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            slug: string;
            isActive: boolean;
            image: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        slug: string;
        shortDesc: string | null;
        price: number;
        comparePrice: number | null;
        collectionId: string;
        movement: string;
        caseSize: string;
        caseMaterial: string;
        dialColor: string;
        waterResistance: string;
        strapMaterial: string;
        strapColor: string;
        stock: number;
        sku: string;
        images: string[];
        mainImage: string;
        isNew: boolean;
        isFeatured: boolean;
        isLimited: boolean;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        adapter: import("@prisma/adapter-pg").PrismaPg;
    }>;
    static getFeatured(): import("@prisma/client").Prisma.PrismaPromise<({
        collection: {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            slug: string;
            isActive: boolean;
            image: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string;
        slug: string;
        shortDesc: string | null;
        price: number;
        comparePrice: number | null;
        collectionId: string;
        movement: string;
        caseSize: string;
        caseMaterial: string;
        dialColor: string;
        waterResistance: string;
        strapMaterial: string;
        strapColor: string;
        stock: number;
        sku: string;
        images: string[];
        mainImage: string;
        isNew: boolean;
        isFeatured: boolean;
        isLimited: boolean;
        isActive: boolean;
    })[]>;
    static getCollections(): import("@prisma/client").Prisma.PrismaPromise<({
        products: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            description: string;
            slug: string;
            shortDesc: string | null;
            price: number;
            comparePrice: number | null;
            collectionId: string;
            movement: string;
            caseSize: string;
            caseMaterial: string;
            dialColor: string;
            waterResistance: string;
            strapMaterial: string;
            strapColor: string;
            stock: number;
            sku: string;
            images: string[];
            mainImage: string;
            isNew: boolean;
            isFeatured: boolean;
            isLimited: boolean;
            isActive: boolean;
        }[];
    } & {
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        slug: string;
        isActive: boolean;
        image: string | null;
    })[]>;
}
export {};
//# sourceMappingURL=product.service.d.ts.map