import type { Request, Response } from "express";
import { AuthService } from "../services/auth.service.js";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export class AuthController {
  static register = catchAsync(async (req: Request, res: Response) => {
    const { email, password, firstName, lastName } = req.body;
    
    const user = await AuthService.register({
      email,
      password,
      firstName,
      lastName,
    });

    const token = AuthService.generateToken(user);
    
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  });

  static login = catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body;
    
    const user = await AuthService.login(email, password);
    const token = AuthService.generateToken(user);

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
    });
  });

  static logout = catchAsync(async (req: Request, res: Response) => {
    res.clearCookie('token');
    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  });

  static getMe = catchAsync(async (req: Request, res: Response) => {
    const user = await AuthService.getUserById(req.user!.id);
    
    if (!user) {
      throw new AppError('User not found', 404);
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
      },
    });
  });
}

export const register = AuthController.register;
export const login = AuthController.login;