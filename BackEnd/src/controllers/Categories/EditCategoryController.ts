import { Request,Response } from "express";
import { EditCategoryService } from "../../services/Category/EditCategoryService";

class EditCategoryController {
    async handle(request: Request, response: Response) {
        const categoryName = request.body.name
        const id = request.body.id_category
        const editCategoryService =  new EditCategoryService();
        const editCategory = await editCategoryService.execute({categoryName,id})

        return response.json(editCategory)
    }
}

export {EditCategoryController}