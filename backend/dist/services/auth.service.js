import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from "../config/database.js";
import AppError from "../utils/AppError.js";
import { env } from "../config/env.js";
export class AuthService {
    static async register(data) {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });
        if (existingUser) {
            throw new AppError('Email already registered', 400);
        }
        const hashedPassword = await bcrypt.hash(data.password, 12);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstName: data.firstName,
                lastName: data.lastName,
            },
        });
        return user;
    }
    static async login(email, password) {
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new AppError('Invalid email or password', 401);
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new AppError('Invalid email or password', 401);
        }
        return user;
    }
    static generateToken(user) {
        return jwt.sign({ userId: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: '7d' });
    }
    static async getUserById(id) {
        return prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                role: true,
            },
        });
    }
}
//# sourceMappingURL=auth.service.js.map