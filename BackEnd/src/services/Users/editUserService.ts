import prismaClient from "../../prisma";

import {hash} from 'bcryptjs'
interface UserRequest {
  id:    string,
  name: string;
  email: string;
  password: string;
}
class EditUserService {
  async execute({ id,name, email, password }: UserRequest) {
  
    const passWordHash = await hash(password,8)

    const userEmailExist = await prismaClient.user.findFirst({
        where:{
            email : email, AND:{
             id:{
                not:id
             }   
            }
        }
    })

    if (userEmailExist){
        throw new Error("Email alread Exist")
    }
    
    const User = await prismaClient.user.update({
        where:{
            id: id   
        },
        data:{
            name: name,
            email: email,
            password: passWordHash
        },
        select:{
            id:true,
            email:true
        }
    })

    return User

  }
}

export { EditUserService };
