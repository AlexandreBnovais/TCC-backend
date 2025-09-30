import { createServer } from 'http';
import { app } from './app/app.js';
import { config } from './app/config/EnvConfig.js';
const server = createServer(app);
const PORT = config.PORT;
const HOST = config.HOST;
server.listen(PORT, () => {
    console.log(`Serve is running on http://${HOST}:${PORT} `);
});
//# sourceMappingURL=server.js.map