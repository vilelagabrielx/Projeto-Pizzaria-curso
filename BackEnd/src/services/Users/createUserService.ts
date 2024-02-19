import prismaClient from "../../prisma";

import {hash} from 'bcryptjs'
interface UserRequest {
  name: string;
  email: string;
  password: string;
}
class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    if(!email){
        throw new Error("Email incorrect")
    }

    const passWordHash = await hash(password,8)

    const userExist = await prismaClient.user.findFirst({
        where:{
            email : email
        }
    })

    if (userExist){
        throw new Error("Email alread Exist")
    }

    const User = await prismaClient.user.create({
        data:{
            name:name,
            email:email,
            password:passWordHash
        },
        select:{
            id:true,
            name:true,
            email:true

        }
    })

    return User

  }
}

export { CreateUserService };
