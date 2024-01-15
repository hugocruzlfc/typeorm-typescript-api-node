import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../libs";

@Entity({ name: "user" })
export class User extends BaseEntity {
  @Column()
  username!: string;

  @Column()
  name!: string;

  @Column()
  lastname!: string;

  @Column({ nullable: true })
  jobPosition?: string;

  @Column()
  phone!: string;
}
