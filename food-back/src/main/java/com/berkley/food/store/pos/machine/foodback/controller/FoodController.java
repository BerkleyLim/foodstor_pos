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
   * @return : 음식 메뉴 전체 조회 (원래는 필요하지만 이 프로젝트에서는 그냥 변하지 않는 메뉴라고 가정하고 할 예정)
   */
  @GetMapping("/")
  public List<FoodDto> selectFood() {
    return foodService.selectFood();
  }

  /**
   * API : 음식 구매
   *
   * @return : 음식 구매시 계좌 출금
   */
  @PostMapping("/purchase")
  public int purchaseFoodAccount(
      @RequestBody PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    return foodService.PurchaseMoneyAccount(purchaseFoodOutMoneyVo);
  }

}
