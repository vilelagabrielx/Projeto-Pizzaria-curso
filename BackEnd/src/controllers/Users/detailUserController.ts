import { Request, Response } from "express";
import { detailUserService } from "../../services/Users/detailUserService";


export class detailUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.body;
        const detailUser = new detailUserService();
        const user = await detailUser.execute({ id });
        return response.json(user);
    }
}