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
import { UserReview } from "./UserReview";

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

  @Column()
  bodyType: BodyType;

  @ManyToOne(() => CarBrand, {
    onDelete: "CASCADE",
  })
  brand: CarBrand;

  @OneToMany(() => CarModelVariant, (variant) => variant.model)
  variants: CarModelVariant[];

  @OneToMany(() => UserReview, (review) => review.carModel)
  userReviews: UserReview[];

  @OneToMany(() => ProfessionalReview, (review) => review.carModel)
  professionalReviews: ProfessionalReview[];
}
