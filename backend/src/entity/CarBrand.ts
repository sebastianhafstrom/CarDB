import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { CarModel } from "./CarModel";

@Entity()
export class CarBrand extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

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
}
