import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userRequesting = this.usersRepository.findById(user_id);

    if (!userRequesting || !userRequesting.admin) {
      throw new Error(
        "Unauthorized operation. Only admins are allowed to list users"
      );
    }
    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
