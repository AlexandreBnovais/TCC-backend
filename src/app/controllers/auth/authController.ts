import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { comparePassword, hashPassword } from "../../service/authService.js";
import { generateToken } from "../../service/authService.js";

const prisma = new PrismaClient();

export class AuthController {
    public async Login(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Os campos são obrigatorios" });
        }

        try {
            const user = await prisma.user.findUnique({
                where: { email },
            });

            if (!user) {
                return res
                    .status(401)
                    .json({ error: "Usuario ou senha invalidos" });
            }

            const isValid = await comparePassword(password, user.password);

            if (!isValid) {
                return res
                    .status(401)
                    .json({ error: "Usuario ou senha invalidos" });
            }

            const token = generateToken(user.id, email);

            return res.json({ message: "Login realizado com sucesso", token });
        } catch (error) {
            console.error("Erro no login", error);
            return res.status(500).json({ error: "Erro interno no servidor" });
        }
    }

    // Register Method

    public async Register(req: Request, res: Response) {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Os campos são obrigatorios" });
        }

        try {
            const hash = await hashPassword(password);
            const createUser = await prisma.user.create({
                data: {
                    email: email,
                    password: hash,
                },
            });

            return res.json({
                message: "Register criado com sucesso",
                id: createUser.id,
                email: createUser.email,
            });
        } catch (error) {
            return res.status(500).json({ error: "Internal serve error" });
        }
    }
}
