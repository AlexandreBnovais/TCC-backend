import 'dotenv/config.js';

interface InConfig {
    // APP_ENVCONFIG
    APP_PORT?: string | undefined;
    APP_HOST: string | undefined;
    APP_NODE_ENV: string | undefined;

    // DATABASE_ENVCONFIG
    DATABASE_DIALET: string | undefined;
    DATABASE_USER: string | undefined;
    DATABASE_PASSWORD: string | undefined;
    DATABASE_PORT: string | undefined;
    DATABASE_NAME: string | undefined;
}

function EnvConfig(): InConfig {
    const config: InConfig = {
        APP_HOST: process.env.APP_HOST,
        APP_PORT: process.env.APP_PORT,
        APP_NODE_ENV: process.env.APP_NODE_ENV,

        // DABASE_ENVCONFIG
        DATABASE_DIALET: process.env.DATABASE_DIALET,
        DATABASE_USER: process.env.DATABASE_USER,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_PORT: process.env.DATABASE_PORT,
        DATABASE_NAME: process.env.DATABASE_NAME,
    };

    for(const [value, index] of Object.entries(config)) {
        if(!value) {
            throw new Error(`Missing required environment variable ${index}`)
        }
    }

    return config
}

export const config = EnvConfig();