import { createServer } from "http";
import { app } from "./app/app.js";

const server = createServer(app);
const PORT = 3000;
const HOST = "localhost";

server.listen(PORT, () => {
    console.log(`Serve is running on http://${HOST}:${PORT} `);
});
