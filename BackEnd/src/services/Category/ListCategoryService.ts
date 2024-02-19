import prismaClient from "../../prisma";

class ListCategoryService {
    async execute() {
        try {
            const Categorys = await prismaClient.category.findMany({
                orderBy: {
                    name: "asc"
                },
                select: {
                    id: true,
                    name:true
                }
            });

            if (!Categorys) {
                throw new Error("There's no categorys");
            }

            return Categorys;

        } catch (error) {

            throw error;
        }
    }
}

export { ListCategoryService }