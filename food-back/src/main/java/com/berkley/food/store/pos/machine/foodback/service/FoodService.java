package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.TestDto;
import com.berkley.food.store.pos.machine.foodback.mapper.FoodMapper;

@Service
public class FoodService {
  @Autowired
  FoodMapper foodMapper;

  public List<TestDto> testSQL() {
    return foodMapper.testSQL();
  }
}
