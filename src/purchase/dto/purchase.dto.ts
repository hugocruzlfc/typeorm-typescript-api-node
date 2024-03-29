import { IsNotEmpty } from "class-validator";
import { CustomerEntity } from "../../customer";
import { BaseDTO } from "../../libs";

export class PurchaseDTO extends BaseDTO {
  @IsNotEmpty()
  status!: string;

  @IsNotEmpty()
  paymentMethod!: string;

  @IsNotEmpty()
  customer!: CustomerEntity;
}
