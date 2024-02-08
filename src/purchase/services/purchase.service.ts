import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { PurchaseEntity } from "../entities";
import { PurchaseDTO } from "../dto";

export class PurchaseService extends BaseService<PurchaseEntity> {
  constructor() {
    super(PurchaseEntity);
  }

  async findAllPurchases(): Promise<PurchaseEntity[]> {
    return (await this.execRepository).find();
  }

  async findPurchaseById(id: string): Promise<PurchaseEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createPurchase(body: PurchaseDTO): Promise<PurchaseEntity> {
    return (await this.execRepository).save(body);
  }

  async deletePurchase(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updatePurchase(
    id: string,
    infoUpdate: PurchaseDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
