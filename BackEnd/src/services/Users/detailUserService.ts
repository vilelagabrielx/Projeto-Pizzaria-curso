import prismaClient from "../../prisma";

class detailUserService {
  async execute({ id}: { id: string }) {

    
    const user = await prismaClient.user.findFirst({
      where: {
        id: id,
      },select:{
       id:true, 
       name:true,
       email:true
      }
    });

    return user;
  }
}

export {detailUserService};