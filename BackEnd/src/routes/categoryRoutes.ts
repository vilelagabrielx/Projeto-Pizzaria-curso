import { Router, Request, Response } from "express";
import { CreateCategoryController } from "../controllers/Categories/CreateCategoryController";
import { ListCategoryController } from "../controllers/Categories/ListCategoryController";
import { isAuthenticated } from "../middlewares/auth/isAuthenticated";
import { validateEmptyParams } from '../middlewares/utils/validation';
import { EditCategoryController } from "../controllers/Categories/EditCategoryController";

const categoryRoutes = Router();

categoryRoutes.post("/category", isAuthenticated,validateEmptyParams(['name']),new CreateCategoryController().handle)

categoryRoutes.put("/category",isAuthenticated, validateEmptyParams(['id','id_category','name']), new EditCategoryController().handle);

categoryRoutes.get("/category", isAuthenticated,new ListCategoryController().handle);


export { categoryRoutes };