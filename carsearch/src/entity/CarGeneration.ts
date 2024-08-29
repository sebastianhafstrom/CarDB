import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CarModel } from "./CarModel";
import { CarEngingeOption } from "./CarEngineOption";

@Entity()
export class CarGeneration extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CarModel, (carModel) => carModel.generations)
  model: CarModel;

  @Column()
  name: string;

  @Column()
  startYear: number;

  @Column({ nullable: true })
  endYear?: number;

  @Column()
  length: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  groundClearance: number;

  @Column()
  cargoVolume: number;

  @OneToMany(() => CarEngingeOption, (engineOption) => engineOption.generation)
  engineOptions: CarEngingeOption[];
}
