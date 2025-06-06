package com.mahesh.billingsoftware.service.impl;

import com.mahesh.billingsoftware.entity.CategoryEntity;
import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;
import com.mahesh.billingsoftware.repository.CategoryRepository;
import com.mahesh.billingsoftware.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

    @Override
    public List<CategoryResponce> read() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryEntity -> convertToResponce(categoryEntity))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String categoryId) {
        CategoryEntity categoryExist =  categoryRepository.findByCategoryId(categoryId).orElseThrow(() -> new RuntimeException("category not found"));
        categoryRepository.delete(categoryExist);

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
