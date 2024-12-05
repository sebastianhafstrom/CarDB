import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BodyType } from "../types";
import { CarBrand } from "./CarBrand";

@Entity()
export class CarModel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  website: string;

  @Column()
  imageUrl: string;

  @Column()
  bodyType: BodyType;

  @ManyToOne(() => CarBrand, (carBrand) => carBrand.models, {
    onDelete: "CASCADE",
  })
  brand: CarBrand;
}
