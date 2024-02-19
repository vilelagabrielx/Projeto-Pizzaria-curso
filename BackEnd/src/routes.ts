import { Router } from "express";
import { userRoutes } from "./routes/userRoutes";
import { categoryRoutes } from "./routes/categoryRoutes";

const mainRouter = Router();

mainRouter.use(userRoutes);
mainRouter.use(categoryRoutes);

export { mainRouter };