import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { UserDTO } from "../dto/user.dto";

import { User } from "../entities/user.entity";

export class UserService extends BaseService<User> {
  constructor() {
    super(User);
  }

  async findAllUser(): Promise<User[]> {
    return (await this.execRepository).find();
  }

  async findUserById(id: string): Promise<User | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createUser(body: UserDTO): Promise<User> {
    return (await this.execRepository).save(body);
  }

  async updateUser(id: string, infoUpdate: UserDTO): Promise<UpdateResult> {
    return (await this.execRepository).update({ id }, infoUpdate);
  }

  async deleteUser(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
}
