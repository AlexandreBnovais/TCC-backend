import 'dotenv/config.js';
function EnvConfig() {
    const config = {
        DATABASE: process.env.DATABASE,
        HOST: process.env.HOST,
        USER: process.env.USER,
        PASSWORD: process.env.PASSWORD,
        PORT: process.env.PORT,
        NODE_ENV: process.env.NODE_ENV
    };
    for (const [value, index] of Object.entries(config)) {
        if (!value) {
            throw new Error(`Missing required environment variable ${index}`);
        }
    }
    return config;
}
export const config = EnvConfig();
//# sourceMappingURL=EnvConfig.js.map