import {Request,Response,NextFunction} from 'express'
import {verify} from 'jsonwebtoken'


interface Payload {
    sub:string;
}
export function isAuthenticated(
    request:Request,
    response:Response,
    next: NextFunction
){
 
    const authtoken = request.headers.authorization;

    const id = request.body.id;

    if (!authtoken){
        return response.status(401).end()      
    }

    const [, token] = authtoken.split(" ");

    try {
        const {sub} = verify(token,process.env.JWT_SECRET) as Payload
        if (sub != id){
            return response.status(401).json({error:"token invalid"})           
        }
        return next();
    } catch (error) {
        return response.status(401).end()
    }

 
}