import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { CarEngine } from "./CarEngine";
import { CarModel } from "./CarModel";

@Entity()
export class CarModelVariant extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => CarModel, (model) => model.variants, {
    onDelete: "CASCADE",
  })
  model: CarModel;

  @ManyToMany(() => CarEngine, (engine) => engine.variants, { cascade: true })
  @JoinTable()
  engines: CarEngine[];
}
