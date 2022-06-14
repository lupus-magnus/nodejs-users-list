import { Response, Request } from "express";

import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers as { user_id: string };
    const { user_id: user_to_delete } = request.params;

    try {
      this.deleteUserUseCase.execute({ user_id, user_to_delete });
      return response.status(204).json({
        message: "The user was successfully deleted from our database.",
      });
    } catch {
      return response.status(400).json({
        error: "Bad request.",
      });
    }
  }
}

export { DeleteUserController };
