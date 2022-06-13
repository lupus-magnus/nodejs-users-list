import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();
    Object.assign(user, { name, email });
    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    const result = this.users.find((user) => user.id === id);
    return result;
  }

  findByEmail(email: string): User | undefined {
    const result = this.users.find((user) => user.email === email);
    return result;
  }

  turnAdmin(receivedUser: User): User {
    const updatedUser: User = {
      ...receivedUser,
      admin: !receivedUser.admin,
      updated_at: new Date(),
    };
    this.users = this.users.map((user) =>
      user.id === receivedUser.id ? updatedUser : user
    );
    return updatedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
