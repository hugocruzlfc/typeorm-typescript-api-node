import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { Customer } from "../../customer";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column()
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  city!: string;

  @Column()
  province!: string;

  @OneToOne(() => Customer, (customer) => customer.user)
  customer!: Customer;
}
