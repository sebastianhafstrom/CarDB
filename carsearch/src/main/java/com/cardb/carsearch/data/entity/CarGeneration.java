package com.cardb.carsearch.data.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "car_generations")
public class CarGeneration extends BaseEntity {

    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "model_id")
    private CarModel carModel;

    private Integer productionStartYear;

    private Integer productionEndYear;

    private String tireSize;

    private Integer length;

    private Integer width;

    private Integer height;

    private Integer groundClearance;

    private Integer cargoVolume;

    protected CarGeneration() {
    }

    public CarGeneration(String name, CarModel carModel, Integer productionStartYear, Integer productionEndYear, String tireSize, Integer length, Integer width, Integer height, Integer groundClearance, Integer cargoVolume) {
        this.name = name;
        this.carModel = carModel;
        this.productionStartYear = productionStartYear;
        this.productionEndYear = productionEndYear;
        this.tireSize = tireSize;
        this.length = length;
        this.width = width;
        this.height = height;
        this.groundClearance = groundClearance;
        this.cargoVolume = cargoVolume;
    }

    public String getName() {
        return name;
    }

    public CarModel getCarModel() {
        return carModel;
    }

    public Integer getProductionStartYear() {
        return productionStartYear;
    }

    public Integer getProductionEndYear() {
        return productionEndYear;
    }

    public String getTireSize() {
        return tireSize;
    }

    public Integer getLength() {
        return length;
    }

    public Integer getWidth() {
        return width;
    }

    public Integer getHeight() {
        return height;
    }

    public Integer getGroundClearance() {
        return groundClearance;
    }

    public Integer getCargoVolume() {
        return cargoVolume;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        CarGeneration that = (CarGeneration) o;
        return Objects.equals(name, that.name) && Objects.equals(carModel, that.carModel) && Objects.equals(productionStartYear, that.productionStartYear) && Objects.equals(productionEndYear, that.productionEndYear) && Objects.equals(tireSize, that.tireSize) && Objects.equals(length, that.length) && Objects.equals(width, that.width) && Objects.equals(height, that.height) && Objects.equals(groundClearance, that.groundClearance) && Objects.equals(cargoVolume, that.cargoVolume);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name, carModel, productionStartYear, productionEndYear, tireSize, length, width, height, groundClearance, cargoVolume);
    }

    @Override
    public String toString() {
        return "CarGeneration{" +
                "name='" + name + '\'' +
                ", model=" + carModel +
                ", productionStartYear=" + productionStartYear +
                ", productionEndYear=" + productionEndYear +
                ", tireSize='" + tireSize + '\'' +
                ", length=" + length +
                ", width=" + width +
                ", height=" + height +
                ", groundClearance=" + groundClearance +
                ", cargoVolume=" + cargoVolume +
                '}';
    }
}
