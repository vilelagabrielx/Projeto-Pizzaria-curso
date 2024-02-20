import prismaClient from "../../prisma";

interface EditCategoryArgs {
    id: string;
    categoryName: string;
}

interface Category {
    id: string;
    name: string;
}

class EditCategoryService {
    async execute({ id, categoryName }: EditCategoryArgs): Promise<Category> {
       
            const existingCategory: Category | null = await prismaClient.category.findFirst({
                where: {
                    name: categoryName,
                    AND: {
                        id: {
                            not: id
                        }
                    }
                },
                select: {
                    id: true,
                    name: true
                }
            });

            if (existingCategory) {
                throw new Error("Category already exists");
            }
            const existCategoryByID : Category | null = await prismaClient.category.findFirst({
                where: {
                    id:id
                },
                select: {
                    id: true,
                    name: true
                }
            });

            if (!existCategoryByID) {
              throw new Error("Category not found");  
            }
            
            const editCategory: Category = await prismaClient.category.update({
                where: {
                    id: id
                },
                data: {
                    name: categoryName
                },
                select: {
                    id: true,
                    name: true
                }
            });

            return editCategory;
       
    }
}

export { EditCategoryService }