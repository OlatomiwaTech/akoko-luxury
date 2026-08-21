interface RegisterData {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
}
export declare class AuthService {
    static register(data: RegisterData): Promise<any>;
    static login(email: string, password: string): Promise<any>;
    static generateToken(user: {
        id: string;
        role: string;
    }): string;
    static getUserById(id: string): Promise<any>;
}
export {};
//# sourceMappingURL=auth.service.d.ts.map