import { Request,Response } from "express";
import { ListCategoryService } from "../../services/Category/ListCategoryService";

class ListCategoryController {
    async handle(request: Request, response: Response) {
        const listCategoryService =  new ListCategoryService();
        const listCategory = await listCategoryService.execute()

        return response.json(listCategory)
    }
}

export {ListCategoryController}