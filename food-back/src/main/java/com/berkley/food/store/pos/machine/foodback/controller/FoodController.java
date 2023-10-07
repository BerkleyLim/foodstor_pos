package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.FoodDto;
import com.berkley.food.store.pos.machine.foodback.service.FoodService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
  @Autowired
  FoodService foodService;

  // @GetMapping("/test")
  // public List<TestDto> testSQL() {
  // return foodService.testSQL();
  // }

  /**
   * API : 음식 조회 서비스
   * 
   * @return : 전체 회원 정보 조회 추가 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @GetMapping("/")
  public List<FoodDto> selectFood() {
    return foodService.selectFood();
  }

}
