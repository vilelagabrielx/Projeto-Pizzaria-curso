import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price:string;
    description: string;
    category_id: string;
}
class CreateProductService {
    async execute({ name, price, description, category_id }: ProductRequest) {

        const product = await prismaClient.product.findFirst()
        
        return product
        
       
    }
}

export { CreateProductService }