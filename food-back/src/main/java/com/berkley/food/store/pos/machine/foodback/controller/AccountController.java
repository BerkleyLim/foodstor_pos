package com.berkley.food.store.pos.machine.foodback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountPurchaseMoneyDto;
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
   * @param accountDto : 계좌 입력 내용 추가 (실제로 사용 하지 않음, 테스트용)
   * @return : 삽입 성공 값
   */
  @PostMapping("/insert/account")
  public int insertAccount(
      @RequestBody AccountDto accountDto) {
    return accountService.insertAccount(accountDto);
  }

  /**
   * @param accountDto : 계좌 입출금
   * @return : 삽입 성공 값
   */
  @PostMapping("/purchse/food")
  public int purchaseOutMoney(
      @RequestBody PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {

    return accountService.PurchaseMoneyAccount(purchaseFoodOutMoneyVo);
  }

  @PostMapping("/change")
  public int InOutAccount(
      @RequestBody AccountVo accountVo) {
    return accountService.changeInOutMoneyAccount(accountVo);
  }

  // /**
  // * @param accountDto : 계좌 정보 삭제
  // * @return : 삭제 성공 값
  // */
  // @PostMapping("/delete/user/info")
  // public int deleteAccount() {
  // return accountService.deleteAccount();
  // }

}
