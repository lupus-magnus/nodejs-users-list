import { User } from "../../model/User";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const repository = UsersRepository.getInstance();
    const alreadyRegistered = !!repository.findByEmail(email);
    if (alreadyRegistered) {
      throw new Error("User already registered!");
    }
    const user = repository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
