import { Router } from "express";
import { userRoutes } from "./routes/userRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";
import { productRoutes } from "./routes/productRoutes";

const mainRouter = Router();

mainRouter.use(userRoutes);

mainRouter.use(categoryRoutes);

mainRouter.use(productRoutes)

export { mainRouter };