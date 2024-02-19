import {Router,Request, Response } from "express";
import { createUserController } from "../controllers/Users/createUserController";
import {AuthUserController} from '../controllers/Users/authUserController'
import { detailUserController } from "../controllers/Users/detailUserController";
import { isAuthenticated } from "../middlewares/auth/isAuthenticated";
import {isvalidEmail, validateEmptyParams} from "../middlewares/utils/validation";
import { EditUserController } from "../controllers/Users/editUserController";

const userRoutes = Router();

userRoutes.post("/users",isvalidEmail, new createUserController().handle);

userRoutes.put("/users",isAuthenticated,validateEmptyParams(["id","name","email","password"]),isvalidEmail, new EditUserController().handle);

userRoutes.post("/session", new AuthUserController().handle);

userRoutes.get("/me",isAuthenticated, new detailUserController().handle);

export {userRoutes}