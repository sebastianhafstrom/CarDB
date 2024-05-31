import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
} from 'typeorm';
import { CarGeneration } from './CarGeneration';
import { FuelType, DriveType, Transmission, CylinderLayout } from '../types';

@Entity()
export class CarEngingeOption extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(
        () => CarGeneration,
        (carGeneration) => carGeneration.engineOptions
    )
    generation: CarGeneration;

    @Column()
    name: string;

    @Column()
    fuelType: FuelType;

    @Column()
    driveType: DriveType;

    @Column()
    transmission: Transmission;

    @Column()
    numberOfGears: number;

    @Column()
    powerKw: number;

    @Column()
    powerHp: number;

    @Column()
    powerBhp: number;

    @Column()
    torqueNm: number;

    @Column()
    topSpeedKph: number;

    @Column()
    acceleration0To100Kph: number;

    @Column()
    numberOfCylinders: number;

    @Column()
    cylinderLayout: CylinderLayout;

    @Column()
    fuelConsumptionCityLper100Km: number;

    @Column()
    fuelConsumptionHighwayLper100Km: number;

    @Column()
    fuelConsumptionMixedLper100Km: number;

}
