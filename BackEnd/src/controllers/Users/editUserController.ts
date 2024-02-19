import { Request, Response } from "express";
import { EditUserService } from "../../services/Users/editUserService";

class EditUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const editUserService = new EditUserService();

    const user = await editUserService.execute({
      id: request.body.id,
      name: request.body.name,
      email: request.body.email,
      password: request.body.password
    });

    return response.json(user);
  }
}

export { EditUserController };
