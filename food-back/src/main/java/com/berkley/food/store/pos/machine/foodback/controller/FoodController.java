package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.food.FoodDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;
import com.berkley.food.store.pos.machine.foodback.service.AccountService;
import com.berkley.food.store.pos.machine.foodback.service.FoodService;

@RestController
@RequestMapping("/api/food")
public class FoodController {
  @Autowired
  FoodService foodService;
  @Autowired
  AccountService accountService;

  /**
   * API : 음식 조회 서비스
   * 
   * @return : 전체 회원 정보 조회 추가 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @GetMapping("/")
  public List<FoodDto> selectFood() {
    return foodService.selectFood();
  }

  /**
   * API : 음식 구매
   *
   * @return : 음식 구매 변경 값 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @PostMapping("/purchase")
  public int purchaseFoodAccount(
      @RequestBody PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    return foodService.PurchaseMoneyAccount(purchaseFoodOutMoneyVo);
  }

}
