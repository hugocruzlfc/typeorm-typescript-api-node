import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { PurchaseProductDTO } from "../dto";
import { PurchaseProductEntity } from "../entities";
import { ProductService } from "../../product";

export class PurchaseProductService extends BaseService<PurchaseProductEntity> {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {
    super(PurchaseProductEntity);
  }

  async findAllPurchaseProducts(): Promise<PurchaseProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findPurchaseProductById(
    id: string
  ): Promise<PurchaseProductEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createPurchaseProduct(
    body: PurchaseProductDTO
  ): Promise<PurchaseProductEntity> {
    const newPurchaseProduct = (await this.execRepository).create(body);

    const product = await this.productService.findProductById(
      newPurchaseProduct.product.id
    );

    newPurchaseProduct.totalPrice =
      product!.price * newPurchaseProduct.quantityProduct;

    return (await this.execRepository).save(newPurchaseProduct);
  }

  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updatePurchaseProduct(
    id: string,
    infoUpdate: PurchaseProductDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
