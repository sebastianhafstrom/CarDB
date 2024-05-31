package com.cardb.carsearch.data.repository;

import com.cardb.carsearch.data.entity.CarGeneration;
import com.cardb.carsearch.data.entity.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CarGenerationRepository extends JpaRepository<CarGeneration, UUID> {
    List<CarGeneration> findAllByCarModel(CarModel carModel);
}
