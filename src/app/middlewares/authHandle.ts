import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { toUnicode } from "punycode";

const JWT_token = process.env.JWT_SECRET;

export async function AuthenticateToken(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    if (!JWT_token)
        throw new Error("JWT_SECRET não definido nas variaveis de ambiente");

    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
        return res
            .status(401)
            .json({ message: "Acesso negado, token não fornecido" });
    }

    try {
        const payload = jwt.verify(token, JWT_token);
        (req as any).user = payload;
        next();
    } catch (error) {
        console.log(error);
        return res.status(403).json({ message: "Token invalido ou expirado" });
    }
}
