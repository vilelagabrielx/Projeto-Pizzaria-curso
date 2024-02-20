import { Request,Response } from "express";
import { CreateCategoryService } from "../../services/Category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const categoryName = request.body.name
        const createCategoryService =  new CreateCategoryService();
        const createCategory = await createCategoryService.execute({categoryName})

        return response.json(createCategory)
    }
}

export {CreateCategoryController}