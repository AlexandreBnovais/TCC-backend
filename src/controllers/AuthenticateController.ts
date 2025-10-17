import type { Request, Response } from "express";
import { AuthRepository } from "../repositories/AuthRepository.ts";
import { AuthSchema } from "../validators/AuthSchema.ts";
import { AuthService } from "../service/AuthService.ts";

// Method from authenticate users
export class AuthenticateController {
    public async Login(req: Request, res: Response) {
        const parse = AuthSchema.safeParse(req.body);

        if (!parse.success) {
            return res.status(400).json({
                message: "Erro de validação",
                errors: parse.error.format(),
            });
        }

        const { email, password } = parse.data;

        try {
            const user = await AuthRepository.findUser(email);
            if (!user) {
                return res
                    .status(401)
                    .json({ message: "Usuario não encontrado" });
            }

            const isValid = await AuthService.comparePassword(
                password,
                user?.password,
            );
            if (!isValid) {
                return res
                    .status(401)
                    .json({ message: "Usuario ou senha invalidos" });
            }

            const jwt = AuthService.hashTokenJWT(email, password);
            return res.status(200).render("dashboard");
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    // Method from register new Users
    public async Register(req: Request, res: Response) {
        const parse = AuthSchema.safeParse(req.body);
        if (!parse.success) {
            return res.status(400).json({
                message: "Campos invalidos",
            });
        }

        const { email, password } = parse.data;

        try {
            const user = await AuthRepository.createUser(email, password);
            return res
                .status(201)
                .render("login", { message: "Usuario registrado com sucesso" });
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}
