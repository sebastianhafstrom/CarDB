import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from 'typeorm';
import { CarModel } from './CarModel';

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

    @OneToMany(() => CarModel, (carModel) => carModel.brand)
    models: CarModel[];

    // Add more columns as needed

    // Add relationships with other entities if necessary
}
