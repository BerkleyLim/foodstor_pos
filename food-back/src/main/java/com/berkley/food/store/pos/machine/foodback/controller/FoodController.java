package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.TestDto;
import com.berkley.food.store.pos.machine.foodback.service.FoodService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
  @Autowired
  FoodService foodService;

  @GetMapping("/test")
  public List<TestDto> testSQL() {
    return foodService.testSQL();
  }
}
