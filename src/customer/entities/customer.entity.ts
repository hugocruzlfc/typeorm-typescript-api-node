import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../../libs";
import { User } from "../../user";
import { Purchase } from "../../purchase";

@Entity({ name: "customers" })
export class Customer extends BaseEntity {
  @Column()
  address!: string;

  @Column()
  dni!: string;

  @OneToOne(() => User, (user) => user.customer)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @OneToMany(() => Purchase, (purchase) => purchase.customer)
  purchases!: Purchase[];
}
