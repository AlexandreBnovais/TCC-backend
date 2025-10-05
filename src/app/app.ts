import express from "express";
import cors from "cors";
import { route } from "./routes/route.js";

const app = express();

app.use((req, res, next) => {
    console.log(req.headers);
    next();
});
app.use(
    cors({
        origin: "*",
        allowedHeaders: ["Content-Type", "Authorization"],
    }),
);
app.use(express.json());
app.use(express.urlencoded());
app.use("/", route);

export { app };
