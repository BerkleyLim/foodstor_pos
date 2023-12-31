package com.berkley.food.store.pos.machine.foodback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.account.AccountVo;
import com.berkley.food.store.pos.machine.foodback.mapper.AccountMapper;
import com.berkley.food.store.pos.machine.foodback.mapper.LogMapper;

@Service
public class AccountService {
  @Autowired
  AccountMapper accountMapper;
  @Autowired
  LogMapper logMapper;

  /**
   * 계좌 전체 조회 (실질적으로 1개의 회원만 존재)
   * 
   * @return
   */
  // public List<AccountDto> selectAccount() {
  public AccountDto selectAccount(Long uno) {
    return accountMapper.selectAccount(uno);
  }

  /**
   * 계좌 전체 삭제 (1개만 있어서 삭제)
   * 
   * @return
   */
  public int deleteAccount() {
    return accountMapper.deleteAccount();
  }

  /**
   * 계좌 입/출금
   * 
   * @return
   */
  public int changeInOutMoneyAccount(AccountVo accountVo) {
    AccountDto accountDto = AccountDto.from(accountVo);
    int insertAccountStatus = accountMapper.changeInOutMoney(accountDto);
    System.out.println(insertAccountStatus);

    LogDto logDto = LogDto.fromAccountInOutMoney(accountVo);
    int insertLogStatus = logMapper.insertLog(logDto);
    System.out.println(insertLogStatus);

    return 1;
  }
}
