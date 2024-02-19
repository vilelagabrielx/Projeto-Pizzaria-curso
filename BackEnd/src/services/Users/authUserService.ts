import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new Error("User/PassWord incorrect.");
    }

    const passWordMath = await compare(password, user.password);

    if (!passWordMath) {
      throw new Error("User/PassWord incorrect.");
    }

    const jwtToken = sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: "30d",
      }
    );

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: jwtToken,
    };
  }
}

export { AuthUserService };
