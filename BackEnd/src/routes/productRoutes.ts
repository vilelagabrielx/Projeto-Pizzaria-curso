import { Router} from "express";
import multer from "multer";
import { isAuthenticated } from "../middlewares/auth/isAuthenticated";
import { validateEmptyParams } from '../middlewares/utils/validation';
import { CreateProductController } from "../controllers/Products/CreateProductController";
import { processFormDataProducts } from "../middlewares/files/upload";

const productRoutes = Router();



productRoutes.post("/product",processFormDataProducts("banner"),validateEmptyParams(["name", "price", "description", "category_id"]),new CreateProductController().handle)

// categoryRoutes.put("/category",isAuthenticated, validateEmptyParams(['id','id_category','name']), new EditCategoryController().handle);

// categoryRoutes.get("/category", isAuthenticated,new ListCategoryController().handle);


export { productRoutes };