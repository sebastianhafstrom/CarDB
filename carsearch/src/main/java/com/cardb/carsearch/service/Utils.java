package com.cardb.carsearch.service;

import com.cardb.carsearch.api.data.ApiBodyType;
import com.cardb.carsearch.api.data.ApiCarBrand;
import com.cardb.carsearch.api.data.ApiCarGeneration;
import com.cardb.carsearch.api.data.ApiCarModel;
import com.cardb.carsearch.data.constants.BodyType;
import com.cardb.carsearch.data.entity.Brand;
import com.cardb.carsearch.data.entity.CarGeneration;
import com.cardb.carsearch.data.entity.CarModel;

import java.util.Collections;
import java.util.stream.Collectors;

public class Utils {

    public static ApiCarBrand mapToApi(Brand brand) {
        return new ApiCarBrand()
                .id(brand.getId())
                .name(brand.getName())
                .originCountry(brand.getOriginCountry())
                .website(brand.getWebsite())
                .slug(brand.getSlug());
    }

    public static ApiCarModel mapToApi(CarModel carModel) {
        return new ApiCarModel()
                .id(carModel.getId())
                .name(carModel.getName())
                .slug(carModel.getSlug())
                .brand(mapToApi(carModel.getBrand()))
                .bodyType(mapToApi(carModel.getBodyType()))
                .generations(carModel.getGenerations() != null ? carModel.getGenerations().stream().map(Utils::mapToApi).collect(Collectors.toList()) : Collections.emptyList());
    }

    public static ApiBodyType mapToApi(BodyType bodyType) {
        return ApiBodyType.valueOf(bodyType.name());
    }

    public static BodyType mapToEntity(ApiBodyType apiBodyType) {
        return BodyType.valueOf(apiBodyType.name());
    }

    public static ApiCarGeneration mapToApi(CarGeneration carGeneration) {
        return new ApiCarGeneration()
                .id(carGeneration.getId())
                .name(carGeneration.getName())
                .productionStartYear(carGeneration.getProductionStartYear())
                .productionEndYear(carGeneration.getProductionEndYear())
                .tireSize(carGeneration.getTireSize())
                .lengthMm(carGeneration.getLength())
                .heightMm(carGeneration.getHeight())
                .groundClearanceMm(carGeneration.getGroundClearance())
                .cargoVolumeLitres(carGeneration.getCargoVolume());
    }
}
