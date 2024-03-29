import { Request,Response } from "express";
import { CreateProductService } from "../../services/Products/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
      
        if(!request.file){
          throw new Error("error uploading file")
        }
        const { originalname, filename: banner} = request.file
        const { name, price, description, category_id} = request.body
        const createProductService =  new CreateProductService();
        const createProduct = await createProductService.execute({name, price, description, category_id,banner})

        return response.json(createProduct)
    }
}

export {CreateProductController}