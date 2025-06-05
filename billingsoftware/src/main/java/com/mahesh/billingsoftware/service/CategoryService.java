package com.mahesh.billingsoftware.service;

import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;

public interface CategoryService {

   CategoryResponce add(CategoryRequest request);
}
