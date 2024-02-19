import { Router, Request, Response } from "express";
import { createUserController } from "./controllers/Users/createUserController";
import {AuthUserController} from './controllers/Users/authUserController'
import { detailUserController } from "./controllers/Users/detailUserController";
import { isAuthenticated } from "./middlewares/auth/isAuthenticated";
import isvalidEmail from "./middlewares/utils/isValidEmail";

const router = Router();

router.post("/users",isvalidEmail, new createUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me",isAuthenticated, new detailUserController().handle);

export { router };
