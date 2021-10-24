package ee.reimo.backend.controller;

import ee.reimo.backend.model.Category;
import ee.reimo.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController

public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("category")
    public List<Category> getCategory() {
        return categoryService.getCategory();
    }

    @PostMapping("category")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Kategooria edukalt lisatud " + category.getName();
    }
}

