package com.cardb.carsearch.data.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.Objects;

@Entity
@Table(name = "brands")
public class Brand extends BaseEntity {

    private String name;

    private String originCountry;

    private String website;

    private String slug;

    protected Brand() {
    }

    public Brand(String name, String originCountry, String website, String slug) {
        this.name = name;
        this.originCountry = originCountry;
        this.website = website;
        this.slug = slug;
    }

    public String getName() {
        return name;
    }

    public String getOriginCountry() {
        return originCountry;
    }

    public String getWebsite() {
        return website;
    }

    public String getSlug() {
        return slug;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        Brand brand = (Brand) o;
        return Objects.equals(getId(), brand.getId()) && Objects.equals(name, brand.name) && Objects.equals(originCountry, brand.originCountry) && Objects.equals(website, brand.website) && Objects.equals(slug, brand.slug);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), name, originCountry, website, slug);
    }

    @Override
    public String toString() {
        return "Brand{" +
                ", name='" + name + '\'' +
                ", originCountry='" + originCountry + '\'' +
                ", website='" + website + '\'' +
                ", slug='" + slug + '\'' +
                '}';
    }
}
