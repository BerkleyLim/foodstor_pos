package com.berkley.food.store.pos.machine.foodback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.food.FoodPurchaseMoneyDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.account.AccountVo;
import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;
import com.berkley.food.store.pos.machine.foodback.service.AccountService;
import com.berkley.food.store.pos.machine.foodback.service.LogService;

@RestController
@RequestMapping("/api/account")
public class AccountController {
  @Autowired
  AccountService accountService;
  @Autowired
  LogService logService;

  /**
   * API : 계좌 조회 서비스
   * 
   * @return : 전체 계좌 조회 추가 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @GetMapping("/{uno}")
  public AccountDto selectAccount(
      @PathVariable String uno) {
    return accountService.selectAccount(Long.parseLong(uno));
  }

  /**
   * @param accountVo : 계좌 입출금
   * @return : 성공 값
   */
  @PostMapping("/change")
  public int InOutAccount(
      @RequestBody AccountVo accountVo) {
    return accountService.changeInOutMoneyAccount(accountVo);
  }

}
