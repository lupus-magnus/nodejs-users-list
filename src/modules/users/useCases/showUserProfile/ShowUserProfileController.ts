import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id: id } = request.params;

    try {
      const user = this.showUserProfileUseCase.execute({ user_id: id });
      return response.status(200).json(user);
    } catch {
      return response.status(404).json({ error: "Not found." });
    }
  }
}

export { ShowUserProfileController };
