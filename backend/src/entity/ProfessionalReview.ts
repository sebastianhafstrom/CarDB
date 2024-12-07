import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarModel } from "./CarModel";

@Entity()
export class ProfessionalReview extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  rating: number;

  @Column()
  website: string;

  @Column()
  date: string;

  @ManyToOne(() => CarModel, {
    onDelete: "CASCADE",
  })
  carModel: CarModel;
}
