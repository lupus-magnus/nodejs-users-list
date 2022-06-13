import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers as { user_id: string };
    try {
      const usersList = this.listAllUsersUseCase.execute({ user_id });
      return response.status(200).json(usersList);
    } catch {
      return response.status(400).json({ error: "Something went wrong." });
    }
  }
}

export { ListAllUsersController };
