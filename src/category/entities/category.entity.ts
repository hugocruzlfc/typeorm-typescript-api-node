import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../../libs";
import { Product } from "../../product";

@Entity({ name: "categories" })
export class Category extends BaseEntity {
  @Column()
  categoryName!: string;

  @OneToMany(() => Product, (product) => product.category)
  products!: Product[];
}
