import prismaClient from "../../prisma";

class CreateCategoryService {
    async execute({ categoryName }) {
        try {
            const existingCategory = await prismaClient.category.findFirst({
                where: {
                    name: categoryName
                },
                select: {
                    id: true
                }
            });

            if (existingCategory) {
                throw new Error("Category already exists");
            }

            const newCategory = await prismaClient.category.create({
                data: {
                    name: categoryName
                },
                select: {
                    id: true,
                    name: true
                }
            });

            return newCategory;
        } catch (error) {
            // Log or handle the error as needed
            throw error;
        }
    }
}

export { CreateCategoryService }