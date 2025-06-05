package com.mahesh.billingsoftware.repository;

import com.mahesh.billingsoftware.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<CategoryEntity,Long> {
}
