import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

export async function hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    return bcrypt.hash(password, saltRound);
}

export async function comparePassword(
    password: string,
    hash: string,
): Promise<boolean> {
    return bcrypt.compare(password, hash);
}

export function generateToken(id: number, email: string): string {
    const key_token = process.env.JWT_SECRET;

    if (!key_token) {
        throw new Error("JWT_SECRET não definido nas variaveis de ambient");
    }

    const payload = {
        userId: id,
        email: email,
    };

    const token = jwt.sign(payload, key_token, { expiresIn: "1h" });

    return token;
}
