package com.cardb.carsearch.api;

import com.cardb.carsearch.api.data.ApiCarBrand;
import com.cardb.carsearch.service.BrandService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BrandController implements BrandsApi {

    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }

    @Override
    public ResponseEntity<List<ApiCarBrand>> getBrands() {
        return ResponseEntity.ok(brandService.getAll());
    }

    @Override
    public ResponseEntity<ApiCarBrand> getBrand(String slug) {
        return ResponseEntity.ok(brandService.getBySlug(slug));
    }

}
