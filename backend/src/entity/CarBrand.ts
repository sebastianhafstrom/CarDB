import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarModel } from "./CarModel";

@Entity()
export class CarBrand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  name: string;

  @Column()
  country: string;

  @Column()
  website: string;

  @OneToMany(() => CarModel, (carModel) => carModel.brand, {
    onDelete: "CASCADE",
  })
  models: CarModel[];

  // Add more columns as needed

  // Add relationships with other entities if necessary
}
