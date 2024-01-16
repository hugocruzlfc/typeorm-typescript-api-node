import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  constructor(private readonly userService = new UserService()) {}

  async getUsers(_req: Request, res: Response) {
    try {
      const data = this.userService.findAllUser();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = this.userService.findUserById(id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = this.userService.createUser(req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = this.userService.updateUser(id, req.body);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = this.userService.deleteUser(id);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}
