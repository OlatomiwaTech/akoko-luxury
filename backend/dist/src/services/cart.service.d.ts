export declare class CartService {
    static getCart(userId: string): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            cartId: string;
            productId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    static addToCart(userId: string, productId: string, quantity: number): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            cartId: string;
            productId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    static updateQuantity(userId: string, productId: string, quantity: number): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            cartId: string;
            productId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
    static removeFromCart(userId: string, productId: string): Promise<({
        items: ({
            product: {
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
            };
        } & {
            id: string;
            cartId: string;
            productId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
    }) | null>;
}
//# sourceMappingURL=cart.service.d.ts.map