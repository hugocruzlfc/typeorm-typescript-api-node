import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../../libs";
import { PurchaseEntity } from "../entities";
import { ProductEntity } from "../../product";

export class PurchaseProductDTO extends BaseDTO {
  @IsNotEmpty()
  quantityProduct!: number;

  @IsOptional()
  totalPrice?: number;

  @IsOptional()
  purchase?: PurchaseEntity;

  @IsOptional()
  product?: ProductEntity;
}
