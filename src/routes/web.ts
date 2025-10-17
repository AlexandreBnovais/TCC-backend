import { Router, type Request, type Response } from "express";
import { Auth } from "../controllers/index.ts";

const route = Router();

route.post(
    "/login",
    Auth.Login,
    /**
     * #swagger.sercurity = [{
     *      "apiKeyAuth":
     * }]
     */
);

route.post("/register", Auth.Register);
