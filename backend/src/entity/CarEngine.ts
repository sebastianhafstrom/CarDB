import { BaseEntity, Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { EmissionStandard, FuelType, Transmission } from "../types";
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

  @Column()
  fourWheelDrive: boolean;

  @Column({
    type: "enum",
    enum: Transmission,
  })
  transmission: Transmission;

  @Column({
    type: "enum",
    enum: EmissionStandard,
  })
  emissionStandard: EmissionStandard;

  @ManyToMany(() => CarModelVariant, (variant) => variant.engines)
  variants: CarModelVariant[];
}
