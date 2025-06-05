package com.mahesh.billingsoftware.controller;

import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;
import com.mahesh.billingsoftware.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

   private final CategoryService categoryService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponce addCategory(@RequestBody CategoryRequest request){
           return   categoryService.add(request);
    }

}
