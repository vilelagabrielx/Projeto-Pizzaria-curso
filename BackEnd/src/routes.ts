import { Router, Request, Response } from "express";
import { createUserController } from "./controllers/Users/createUserController";

const router = Router();

router.post("/users", new createUserController().handle);

export { router };
