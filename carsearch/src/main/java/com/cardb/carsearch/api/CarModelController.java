package com.cardb.carsearch.api;

import com.cardb.carsearch.api.data.ApiBodyType;
import com.cardb.carsearch.api.data.ApiCarModel;
import com.cardb.carsearch.api.data.ApiCreateCarModel;
import com.cardb.carsearch.service.CarModelService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
public class CarModelController implements CarsApi {

    private final CarModelService carModelService;

    public CarModelController(CarModelService carModelService) {
        this.carModelService = carModelService;
    }

    @Override
    public ResponseEntity<ApiCarModel> getCar(String slug) {
        return ResponseEntity.ok(carModelService.getBySlug(slug));
    }

    @Override
    public ResponseEntity<List<ApiCarModel>> getCars(String search, List<UUID> brandIds, List<ApiBodyType> bodyTypes) {
        return ResponseEntity.ok(carModelService.getAll(search, brandIds, bodyTypes));
    }

    @Override
    public ResponseEntity<ApiCarModel> createCar(ApiCreateCarModel apiCreateCarModel) {
        return ResponseEntity.status(HttpStatus.CREATED).body(carModelService.create(apiCreateCarModel));
    }
}
