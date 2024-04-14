package com.cardb.carsearch.data.repository;

import com.cardb.carsearch.data.entity.CarModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CarModelRepository extends JpaRepository<CarModel, UUID>, JpaSpecificationExecutor<CarModel> {
    Optional<CarModel> findBySlug(String slug);
}
