import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const useCase = this.turnUserAdminUseCase;
    const { user_id } = request.params;

    try {
      const updatedUser = useCase.execute({ user_id });
      return response.status(200).json(updatedUser);
    } catch {
      return response.status(404).json({ error: "Not found." });
    }
  }
}

export { TurnUserAdminController };
