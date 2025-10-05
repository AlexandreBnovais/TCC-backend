import { Router } from "express";
import { auth } from "../controllers/index.js";
const route = Router();

route.post("/login", auth.Login);
route.post("/register", auth.Register);

export { route };
