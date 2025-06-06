package com.mahesh.billingsoftware.service;

import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;

import java.util.List;

public interface CategoryService {

   CategoryResponce add(CategoryRequest request);

   List<CategoryResponce> read();

   void delete(String categoryId);
}
