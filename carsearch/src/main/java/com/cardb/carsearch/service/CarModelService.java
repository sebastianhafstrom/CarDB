package com.cardb.carsearch.service;

import com.cardb.carsearch.api.data.ApiBodyType;
import com.cardb.carsearch.api.data.ApiCarModel;
import com.cardb.carsearch.data.constants.BodyType;
import com.cardb.carsearch.data.entity.CarModel;
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

    public CarModelService(CarModelRepository carModelRepository) {
        this.carModelRepository = carModelRepository;
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
        CarModel carModel = carModelRepository.findBySlug(slug).orElseThrow(EntityNotFoundException::new);
        return Utils.mapToApi(carModel);
    }
}
