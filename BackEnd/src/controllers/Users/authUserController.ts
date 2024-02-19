import { Request, Response, response } from "express";
import { AuthUserService } from "../../services/Users/authUserService";

class AuthUserController{
    async handle(request:Request,response:Response){

        const {email,password} = request.body;

        const authUserService = new AuthUserService()

        const auth = await authUserService.execute({email,password})

        return response.json(auth);
    }
   
}

export {AuthUserController}