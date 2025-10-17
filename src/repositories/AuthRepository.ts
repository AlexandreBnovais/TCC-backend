import { prisma } from "../libs/prisma.ts";
import type { User } from "@prisma/client";
import { AuthService } from "../service/AuthService.ts";

export class AuthRepository {
    public static async findUser(email: string) {
        return await prisma.user.findUnique({ where: { email } });
    }

    public static async createUser(
        email: string,
        password: string,
    ): Promise<User> {
        const hash = await AuthService.hashPassword(password);
        const normalizeEmail = email.toLowerCase();

        try {
            return await prisma.user.create({
                data: {
                    email: normalizeEmail,
                    password: hash,
                },
            });
        } catch (error: any) {
            if (error.code === "P2002") {
                throw new Error("Email already in use");
            }
            throw error;
        }
    }
}
