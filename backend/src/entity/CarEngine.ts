import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { FuelType } from "../types";
import { CarModelVariant } from "./CarModelVariant";

@Entity()
export class CarEngine extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    type: "enum",
    enum: FuelType,
  })
  fuelType: FuelType;

  @Column()
  power: number;

  @ManyToMany(() => CarModelVariant, (variant) => variant.engines)
  variants: CarModelVariant[];
}
