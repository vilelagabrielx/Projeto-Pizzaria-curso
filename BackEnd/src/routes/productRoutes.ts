import { Router} from "express";
import multer from "multer";
import { isAuthenticated } from "../middlewares/auth/isAuthenticated";
import { validateEmptyParams } from '../middlewares/utils/validation';
import { CreateProductController } from "../controllers/Products/CreateProductController";
import { uploadToFolder } from "../middlewares/files/upload";
import { isAuthenticatedByParam } from './../middlewares/auth/isAuthenticatedByParam';

const productRoutes = Router();

const upload =  uploadToFolder("products")

productRoutes.post("/product/:idUser",isAuthenticatedByParam,upload.single("banner"),validateEmptyParams(["name", "price", "description", "category_id"]),new CreateProductController().handle)

// categoryRoutes.put("/category",isAuthenticated, validateEmptyParams(['id','id_category','name']), new EditCategoryController().handle);

// categoryRoutes.get("/category", isAuthenticated,new ListCategoryController().handle);


export { productRoutes };