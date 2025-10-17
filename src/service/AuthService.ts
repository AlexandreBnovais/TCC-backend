import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export class AuthService {
    public static async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    }

    public static async comparePassword(
        hash: string,
        password: string,
    ): Promise<boolean> {
        return await bcrypt.compare(password, hash);
    }

    public static hashTokenJWT(email: string, password: string) {
        const secret = process.env.JWT_SECRET;
        if (!secret)
            throw new Error(
                "JWT_SECRET não definido nas variaveis de ambiente",
            );
        const payload = {
            email: email,
            password: password,
        };
        return JWT.sign(payload, secret, { expiresIn: "1h" });
    }
}
