import { Router, Request, Response } from "express";
import { CreateCategoryController } from "../controllers/Category/CreateCategoryController";
import { ListCategoryController } from "../controllers/Category/ListCategoryController";
import { isAuthenticated } from "../middlewares/auth/isAuthenticated";
import { validateEmptyParams } from '../middlewares/utils/validation';

const categoryRoutes = Router();

categoryRoutes.post("/category", validateEmptyParams(['name']), isAuthenticated, (req: Request, res: Response) => {
  try {
    new CreateCategoryController().handle(req, res);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

categoryRoutes.get("/category", isAuthenticated, (req: Request, res: Response) => {
  try {
    new ListCategoryController().handle(req, res);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});


export { categoryRoutes };