import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { Product } from "../../product";
import { Purchase } from "..";

@Entity({ name: "purchases_products" })
export class PurchaseProduct extends BaseEntity {
  @Column()
  quantityProduct!: number;

  @Column()
  totalPrice!: number;

  @ManyToOne(() => Purchase, (purchase) => purchase.purchaseProduct)
  @JoinColumn({ name: "purchase_id" })
  purchase!: Purchase;

  @ManyToOne(() => Product, (product) => product.purchaseProduct)
  @JoinColumn({ name: "product_id" })
  product!: Product;
}
