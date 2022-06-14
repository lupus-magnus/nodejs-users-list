import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_to_delete: string;
  user_id: string;
}

class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id, user_to_delete }: IRequest): void {
    const repository = UsersRepository.getInstance();
    const userRequesting = repository.findById(user_id);
    if (!userRequesting || !userRequesting.admin) {
      throw new Error("Not allowed to delete");
    }
    const user = repository.findById(user_to_delete);
    if (!user) {
      throw new Error("Not found.");
    }
    repository.delete(user_to_delete);
  }
}

export { DeleteUserUseCase };
