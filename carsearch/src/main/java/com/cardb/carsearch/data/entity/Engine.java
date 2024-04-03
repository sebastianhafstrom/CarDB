package com.cardb.carsearch.data.entity;

import com.cardb.carsearch.data.constants.CylinderLayout;
import com.cardb.carsearch.data.constants.DriveType;
import com.cardb.carsearch.data.constants.FuelType;
import com.cardb.carsearch.data.constants.TransmissionType;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Objects;

@Entity
@Table(name = "engines")
public class Engine extends BaseEntity {

    @ManyToOne
    private CarGeneration generation;

    private String name;

    @Enumerated(EnumType.STRING)
    private FuelType fuelType;

    @Enumerated(EnumType.STRING)
    private DriveType driveType;

    @Enumerated(EnumType.STRING)
    private TransmissionType transmissionType;

    private Integer numberOfCylinders;

    @Enumerated(EnumType.STRING)
    private CylinderLayout cylinderLayout;

    private Integer numberOfGears;

    private BigDecimal fuelEconomyCity;

    private BigDecimal fuelEconomyHighway;

    private BigDecimal fuelEconomyCombined;

    private BigInteger powerKw;

    private BigInteger powerHp;

    private BigInteger powerBhp;

    @Column(name = "top_speed_kph")
    private BigDecimal topSpeedKph;

    @Column(name = "acceleration_0_to_100_kph")
    private BigDecimal acceleration0to100Kph;

    protected Engine() {
    }

    public CarGeneration getGeneration() {
        return generation;
    }

    public String getName() {
        return name;
    }

    public FuelType getFuelType() {
        return fuelType;
    }

    public DriveType getDriveType() {
        return driveType;
    }

    public TransmissionType getTransmissionType() {
        return transmissionType;
    }

    public Integer getNumberOfCylinders() {
        return numberOfCylinders;
    }

    public CylinderLayout getCylinderLayout() {
        return cylinderLayout;
    }

    public Integer getNumberOfGears() {
        return numberOfGears;
    }

    public BigDecimal getFuelEconomyCity() {
        return fuelEconomyCity;
    }

    public BigDecimal getFuelEconomyHighway() {
        return fuelEconomyHighway;
    }

    public BigDecimal getFuelEconomyCombined() {
        return fuelEconomyCombined;
    }

    public BigInteger getPowerKw() {
        return powerKw;
    }

    public BigInteger getPowerHp() {
        return powerHp;
    }

    public BigInteger getPowerBhp() {
        return powerBhp;
    }

    public BigDecimal getTopSpeedKph() {
        return topSpeedKph;
    }

    public BigDecimal getAcceleration0to100Kph() {
        return acceleration0to100Kph;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Engine engine = (Engine) o;
        return Objects.equals(generation, engine.generation) && Objects.equals(name, engine.name) && fuelType == engine.fuelType && driveType == engine.driveType && transmissionType == engine.transmissionType && Objects.equals(numberOfCylinders, engine.numberOfCylinders) && cylinderLayout == engine.cylinderLayout && Objects.equals(numberOfGears, engine.numberOfGears) && Objects.equals(fuelEconomyCity, engine.fuelEconomyCity) && Objects.equals(fuelEconomyHighway, engine.fuelEconomyHighway) && Objects.equals(fuelEconomyCombined, engine.fuelEconomyCombined) && Objects.equals(powerKw, engine.powerKw) && Objects.equals(powerHp, engine.powerHp) && Objects.equals(powerBhp, engine.powerBhp) && Objects.equals(topSpeedKph, engine.topSpeedKph) && Objects.equals(acceleration0to100Kph, engine.acceleration0to100Kph);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), generation, name, fuelType, driveType, transmissionType, numberOfCylinders, cylinderLayout, numberOfGears, fuelEconomyCity, fuelEconomyHighway, fuelEconomyCombined, powerKw, powerHp, powerBhp, topSpeedKph, acceleration0to100Kph);
    }

    @Override
    public String toString() {
        return "Engine{" +
                "id" + getId() +
                ", generation=" + generation +
                ", name='" + name + '\'' +
                ", fuelType=" + fuelType +
                ", driveType=" + driveType +
                ", transmissionType=" + transmissionType +
                ", numberOfCylinders=" + numberOfCylinders +
                ", cylinderLayout=" + cylinderLayout +
                ", numberOfGears=" + numberOfGears +
                ", fuelEconomyCity=" + fuelEconomyCity +
                ", fuelEconomyHighway=" + fuelEconomyHighway +
                ", fuelEconomyCombined=" + fuelEconomyCombined +
                ", powerKw=" + powerKw +
                ", powerHp=" + powerHp +
                ", powerBhp=" + powerBhp +
                ", topSpeedKph=" + topSpeedKph +
                ", acceleration0to100Kph=" + acceleration0to100Kph +
                '}';
    }
}
