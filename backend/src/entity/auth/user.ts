import bcrypt from "bcrypt";
import {
  BaseEntity,
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Role } from "../../types";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ type: "enum", enum: Role, default: Role.USER })
  role: Role;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(password: string) {
    console.log(password, this.password);
    return await bcrypt.compare(password, this.password);
  }
}
