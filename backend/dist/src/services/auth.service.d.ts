interface RegisterData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
export declare class AuthService {
    static register(data: RegisterData): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        role: import("@prisma/client").$Enums.Role;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static login(email: string, password: string): Promise<{
        id: string;
        email: string;
        password: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        role: import("@prisma/client").$Enums.Role;
        emailVerified: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static generateToken(user: {
        id: string;
        role: string;
    }): string;
    static getUserById(id: string): Promise<{
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        phone: string | null;
        role: import("@prisma/client").$Enums.Role;
    } | null>;
}
export {};
//# sourceMappingURL=auth.service.d.ts.map