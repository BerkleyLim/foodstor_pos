package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.AccountDto;
import com.berkley.food.store.pos.machine.foodback.service.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController {
  @Autowired
  AccountService accountService;

  /**
   * API : 계좌 조회 서비스
   * 
   * @return : 전체 계좌 조회 추가 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @GetMapping("/")
  public List<AccountDto> selectAccount() {
    return accountService.selectAccount();
  }

  /**
   * @param accountDto : 계좌 입력 내용 추가
   * @return : 삽입 성공 값
   */
  @PostMapping("/insert/account")
  public int insertAccount(
      @RequestBody AccountDto accountDto) {
    return accountService.insertAccount(accountDto);
  }

  /**
   * @param accountDto : 계좌 정보 삭제
   * @return : 삭제 성공 값
   */
  @PostMapping("/delete/user/info")
  public int deleteAccount() {
    return accountService.deleteAccount();
  }

}
