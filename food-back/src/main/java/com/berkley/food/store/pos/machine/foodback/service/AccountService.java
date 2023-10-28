package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountPurchaseMoneyDto;
import com.berkley.food.store.pos.machine.foodback.mapper.AccountMapper;

@Service
public class AccountService {
  @Autowired
  AccountMapper accountMapper;

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
   * 계좌 입금
   * 
   * @return
   */
  public int changeInMoneyAccount(AccountDto accountDto) {
    return accountMapper.changeInOutMoney(accountDto);
  }

  /**
   * 계좌 출금
   * 
   * @return
   */
  public int changeOutMoneyAccount(AccountDto accountDto) {
    accountDto.setUserMoney(-accountDto.getUserMoney());
    return accountMapper.changeInOutMoney(accountDto);
  }

  /**
   * 음식 주문 시 출금
   * 
   * @return
   */
  public int PurchaseMoneyAccount(AccountPurchaseMoneyDto accountPurchaseMoneyDto) {
    return accountMapper.purchaseOutMoney(accountPurchaseMoneyDto);
  }

  /**
   * 계좌 삽입 (아직 사용을 하지 않지만, 회원 정보 서비스에서 사용 예정, 그냥 테스트 용도로 둠)
   * 
   * @return
   */
  public int insertAccount(AccountDto accountDto) {
    return accountMapper.insertAccount(accountDto);
  }
}
