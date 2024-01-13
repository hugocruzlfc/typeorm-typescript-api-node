import { UserController } from "../controllers";
import { BaseRoute } from "./routes";

export class UserRouter extends BaseRoute<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/user", (req, res) => this.controller.getUsers(req, res));
  }
}
