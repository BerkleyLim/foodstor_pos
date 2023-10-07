package com.berkley.food.store.pos.machine.foodback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.berkley.food.store.pos.machine.foodback.domain.dto.FoodDto;

@Repository
@Mapper
public interface FoodMapper {
  // List<TestDto> testSQL();
  List<FoodDto> selectFood();
}
