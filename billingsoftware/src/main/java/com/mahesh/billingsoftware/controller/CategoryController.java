package com.mahesh.billingsoftware.controller;

import com.mahesh.billingsoftware.io.CategoryRequest;
import com.mahesh.billingsoftware.io.CategoryResponce;
import com.mahesh.billingsoftware.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

   private final CategoryService categoryService;
    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponce addCategory(@RequestBody CategoryRequest request){
           return   categoryService.add(request);
    }
    @GetMapping
    public List<CategoryResponce> fetchCategory(){
        return categoryService.read();
    }

    @DeleteMapping("/{categoryId}")
    public void delete(@PathVariable String categoryId){
        try{
            categoryService.delete(categoryId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"category not found"+categoryId);

        }

    }
}
