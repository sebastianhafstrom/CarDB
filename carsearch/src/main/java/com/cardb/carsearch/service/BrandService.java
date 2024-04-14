package com.cardb.carsearch.service;

import com.cardb.carsearch.api.data.ApiCarBrand;
import com.cardb.carsearch.api.data.ApiCreateCarBrand;
import com.cardb.carsearch.data.entity.Brand;
import com.cardb.carsearch.data.repository.BrandRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class BrandService {

    private final BrandRepository brandRepository;

    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }

    public List<ApiCarBrand> getAll() {
        return brandRepository.findAll().stream()
                .map(Utils::mapToApi)
                .collect(Collectors.toList());
    }

    public ApiCarBrand getBySlug(String slug) {
        Brand brand =  brandRepository.findBySlug(slug).orElseThrow(EntityNotFoundException::new);
        return Utils.mapToApi(brand);
    }

    Brand getByIdEntity(UUID id) {
        return brandRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public ApiCarBrand create(ApiCreateCarBrand apiCreateCarBrand) {
        Brand brand = new Brand(apiCreateCarBrand.getName(), apiCreateCarBrand.getOriginCountry(), apiCreateCarBrand.getWebsite(), apiCreateCarBrand.getSlug());
        brandRepository.save(brand);
        return Utils.mapToApi(brand);
    }

}
