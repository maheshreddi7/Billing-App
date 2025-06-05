package com.mahesh.billingsoftware.service.impl;

import com.mahesh.billingsoftware.entity.CategoryEntity;
import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;
import com.mahesh.billingsoftware.repository.CategoryRepository;
import com.mahesh.billingsoftware.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public CategoryResponce add(CategoryRequest request) {
        CategoryEntity newCategory = convertToEntity(request);
        newCategory =categoryRepository.save(newCategory);
        return convertToResponce(newCategory);
    }

    private CategoryResponce convertToResponce(CategoryEntity newCategory) {
        return CategoryResponce.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColour(newCategory.getBgColour())
                .imgUrl(newCategory.getImgUrl())
                .createdAt(newCategory.getCreatedAt())
                .updatedAt(newCategory.getUpdatedAt())
                .build();
    }

    private CategoryEntity convertToEntity(CategoryRequest request) {
        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColour(request.getBgColour())
                .build();
    }
}
