import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { BaseEntity } from "../../libs";
import { Customer } from "../../customer";
import { PurchaseProduct } from "./purchases-products.entity";

@Entity({ name: "purchases" })
export class Purchase extends BaseEntity {
  @Column()
  status!: string;

  @Column()
  paymentMethod!: string;

  @ManyToOne(() => Customer, (customer) => customer.purchases)
  @JoinColumn({ name: "customer_id" })
  customer!: Customer;

  @OneToMany(
    () => PurchaseProduct,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchaseProduct[];
}
