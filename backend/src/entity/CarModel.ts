import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import { BodyType } from "../types";
import { CarBrand } from "./CarBrand";
import { CarModelVariant } from "./CarModelVariant";
import { ProfessionalReview } from "./ProfessionalReview";

@Entity()
export class CarModel extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  website: string;

  @Column()
  imageUrl: string;

  @Column({
    type: "enum",
    enum: BodyType,
  })
  bodyType: BodyType;

  @ManyToOne(() => CarBrand, {
    onDelete: "CASCADE",
  })
  brand: CarBrand;

  @OneToMany(() => CarModelVariant, (variant) => variant.model)
  variants: CarModelVariant[];

  @OneToMany(() => ProfessionalReview, (review) => review.carModel)
  professionalReviews: ProfessionalReview[];

  // Dimensions
  @Column({ nullable: true }) //just because I don't have all the data
  length: number;

  @Column({ nullable: true }) //just because I don't have all the data
  width: number;

  @Column({ nullable: true }) //just because I don't have all the data
  height: number;

  @Column({ nullable: true }) //just because I don't have all the data
  wheelbase: number;
}
