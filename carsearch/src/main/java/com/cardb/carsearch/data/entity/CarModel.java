package com.cardb.carsearch.data.entity;

import com.cardb.carsearch.data.constants.BodyType;
import jakarta.persistence.*;

import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "car_models")
public class CarModel extends BaseEntity {

    private String name;

    private String slug;

    @Enumerated(EnumType.STRING)
    private BodyType bodyType;

    @ManyToOne
    private Brand brand;

    @OneToMany(mappedBy = "model", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<CarGeneration> generations;

    protected CarModel() {}

    public String getName() {
        return name;
    }

    public String getSlug() {
        return slug;
    }

    public BodyType getBodyType() {
        return bodyType;
    }

    public Brand getBrand() {
        return brand;
    }

    public List<CarGeneration> getGenerations() {
        return generations;
    }

    public CarModel(String name, String slug, BodyType bodyType, Brand brand) {
        this.name = name;
        this.slug = slug;
        this.bodyType = bodyType;
        this.brand = brand;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        CarModel carModel = (CarModel) o;
        return Objects.equals(name, carModel.name) && Objects.equals(slug, carModel.slug) && bodyType == carModel.bodyType && Objects.equals(brand, carModel.brand);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name, slug, bodyType, brand);
    }

    @Override
    public String toString() {
        return "CarModel{" +
                "name='" + name + '\'' +
                ", slug='" + slug + '\'' +
                ", bodyType=" + bodyType +
                ", brand=" + brand +
                '}';
    }
}
