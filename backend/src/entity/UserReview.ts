import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarModel } from "./CarModel";

@Entity()
export class UserReview extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  rating: number;

  @ManyToOne(() => CarModel, {
    onDelete: "CASCADE",
  })
  carModel: CarModel;
}
