import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../libs";
import { Category } from "../../category";
import { PurchaseProduct } from "../../purchase";

@Entity({ name: "products" })
export class Product extends BaseEntity {
  @Column()
  productName!: string;

  @Column()
  description!: string;

  @Column()
  price!: number;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: "category_id" })
  category!: Category;

  @OneToMany(
    () => PurchaseProduct,
    (purchaseProduct) => purchaseProduct.product
  )
  purchaseProduct!: PurchaseProduct[];
}
