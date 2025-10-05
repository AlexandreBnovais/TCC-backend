import { createServer } from "http";
import { app } from "./app/app.js";
import 'dotenv/config';

const server = createServer(app);
const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST;

server.listen(PORT, () => {
    console.log(`Serve is running on http://${HOST}:${PORT} `);
    console.log('Press CTRL + C to exit...');
});

process.on('SIGINT', () => {
    console.log("server closing...");
    server.close((err) => {
        if(err) {
            console.error('Error closing server', err);
            process.exit(1);
        }
        console.log('Server closed');
        process.exit(0);
    });
    
})
