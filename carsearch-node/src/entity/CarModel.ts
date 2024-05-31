import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    BaseEntity,
    OneToMany,
} from 'typeorm';
import { CarBrand } from './CarBrand';
import { BodyType } from '../types';
import { CarGeneration } from './CarGeneration';

@Entity()
export class CarModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    slug: string;

    @Column()
    bodyType: BodyType;

    @ManyToOne(() => CarBrand, (carBrand) => carBrand.models)
    brand: CarBrand;

    @OneToMany(() => CarGeneration, (carGeneration) => carGeneration.model)
    generations: CarGeneration[];
}
