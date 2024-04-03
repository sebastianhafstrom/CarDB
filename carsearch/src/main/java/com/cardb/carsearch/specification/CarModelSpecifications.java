package com.cardb.carsearch.specification;

import com.cardb.carsearch.data.constants.BodyType;
import com.cardb.carsearch.data.entity.CarModel;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.UUID;

public class CarModelSpecifications {
    public static Specification<CarModel> hasBrandIds(List<UUID> brandIds) {
        return (root, query, criteriaBuilder) -> root.get("brand").get("id").in(brandIds);
    }

    public static Specification<CarModel> hasBodyTypes(List<BodyType> bodyTypes) {
        return (root, query, criteriaBuilder) -> root.get("bodyType").in(bodyTypes);
    }

    public static Specification<CarModel> hasSearch(String search) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.or(
                criteriaBuilder.like(root.get("name"), "%" + search + "%"),
                criteriaBuilder.like(root.get("slug"), "%" + search + "%")
        );
    }
}
