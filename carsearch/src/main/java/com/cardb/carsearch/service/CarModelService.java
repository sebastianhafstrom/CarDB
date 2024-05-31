package com.cardb.carsearch.service;

import com.cardb.carsearch.api.data.*;
import com.cardb.carsearch.data.constants.BodyType;
import com.cardb.carsearch.data.entity.Brand;
import com.cardb.carsearch.data.entity.CarGeneration;
import com.cardb.carsearch.data.entity.CarModel;
import com.cardb.carsearch.data.repository.CarGenerationRepository;
import com.cardb.carsearch.data.repository.CarModelRepository;
import com.cardb.carsearch.specification.CarModelSpecifications;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CarModelService {

    private final CarModelRepository carModelRepository;
    private final CarGenerationRepository carGenerationRepository;
    private final BrandService brandService;

    public CarModelService(CarModelRepository carModelRepository, CarGenerationRepository carGenerationRepository, BrandService brandService) {
        this.carModelRepository = carModelRepository;
        this.carGenerationRepository = carGenerationRepository;
        this.brandService = brandService;
    }

    public List<ApiCarModel> getAll(String search, List<UUID> brandIds, List<ApiBodyType> bodyTypes) {
        Specification<CarModel> specification = Specification.where(null);

        if (search != null) {
            specification = specification.and(CarModelSpecifications.hasSearch(search));
        }
        if (brandIds != null && !brandIds.isEmpty()) {
            specification = specification.and(CarModelSpecifications.hasBrandIds(brandIds));
        }
        if (bodyTypes != null && !bodyTypes.isEmpty()) {
            List<BodyType> bodyTypeList = bodyTypes.stream()
                    .map(Utils::mapToEntity)
                    .toList();
            specification = specification.and(CarModelSpecifications.hasBodyTypes(bodyTypeList));
        }

        List<CarModel> carModels = carModelRepository.findAll(specification);

        return carModels.stream()
                .map(Utils::mapToApi)
                .collect(Collectors.toList());
    }

    public ApiCarModel getBySlug(String slug) {
        CarModel carModel = getBySlugEntity(slug);
        return Utils.mapToApi(carModel);
    }

    private CarModel getBySlugEntity(String slug) {
        return carModelRepository.findBySlug(slug).orElseThrow(EntityNotFoundException::new);
    }

    public ApiCarModel create(ApiCreateCarModel apiCreateCarModel) {
        Brand brand = brandService.getByIdEntity(apiCreateCarModel.getBrandId());
        CarModel carModel = new CarModel(apiCreateCarModel.getName(), apiCreateCarModel.getSlug(), Utils.mapToEntity(apiCreateCarModel.getBodyType()), brand);
        carModelRepository.save(carModel);
        return Utils.mapToApi(carModel);
    }

    public ApiCarGeneration createCarGeneration(String slug, ApiCreateCarGeneration apiCreateCarGeneration) {
        CarModel carModel = getBySlugEntity(slug);
        CarGeneration carGeneration = new CarGeneration(
                apiCreateCarGeneration.getName(),
                carModel,
                apiCreateCarGeneration.getProductionStartYear(),
                apiCreateCarGeneration.getProductionEndYear(),
                apiCreateCarGeneration.getTireSize(),
                apiCreateCarGeneration.getLengthMm(),
                apiCreateCarGeneration.getWidthMm(),
                apiCreateCarGeneration.getHeightMm(),
                apiCreateCarGeneration.getGroundClearanceMm(),
                apiCreateCarGeneration.getCargoVolumeLitres()
        );
        return Utils.mapToApi(carGenerationRepository.save(carGeneration));
    }

    public List<ApiCarGeneration> getCarGenerations(String slug) {
        CarModel carModel = getBySlugEntity(slug);
        return carGenerationRepository.findAllByCarModel(carModel).stream()
                .map(Utils::mapToApi)
                .collect(Collectors.toList());
    }
}
