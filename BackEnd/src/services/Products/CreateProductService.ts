import prismaClient from "../../prisma";
import path from 'path';
const fs = require('fs');
interface ProductRequest {
    name: string;
    price:string;
    description: string;
    category_id: string;
    banner:string;
}
class CreateProductService {
    async execute({ name, price, description, category_id,banner }: ProductRequest) {

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                category_id: category_id,
                banner: banner
            },
            select: {
                id: true,
                name: true,
                price: true,
                description:true,
                category_id:true,
                banner:true
            }
        })

        const imagePath = path.join(__dirname, '../../../../temp/products', banner);

        const imagem = fs.readFileSync(imagePath);

        const imagemBase64 = Buffer.from(imagem).toString('base64');

        const dataUrl = `data:image/jpeg;base64,${imagemBase64}`;
        
        product.banner =  dataUrl
        
        return product
        
       
    }
}

export { CreateProductService }