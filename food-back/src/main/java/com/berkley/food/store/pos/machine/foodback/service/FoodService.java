package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.food.FoodPurchaseMoneyDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.food.FoodDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;
import com.berkley.food.store.pos.machine.foodback.mapper.AccountMapper;
import com.berkley.food.store.pos.machine.foodback.mapper.FoodMapper;
import com.berkley.food.store.pos.machine.foodback.mapper.LogMapper;

@Service
public class FoodService {
  @Autowired
  FoodMapper foodMapper;
  @Autowired
  AccountMapper accountMapper;
  @Autowired
  LogMapper logMapper;

  /**
   * 음식 메뉴 전체 조회
   * 
   * @return
   */
  public List<FoodDto> selectFood() {
    return foodMapper.selectFood();
  }

  /**
   * 음식 주문 시 출금
   * 
   * @return
   */
  public int PurchaseMoneyAccount(PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    System.out.println(purchaseFoodOutMoneyVo);
    FoodPurchaseMoneyDto accountPurchaseMoneyDto = FoodPurchaseMoneyDto.from(purchaseFoodOutMoneyVo);
    int insertAccountStatus = accountMapper.purchaseOutMoney(accountPurchaseMoneyDto);
    System.out.println(insertAccountStatus);

    LogDto logDto = LogDto.fromPurchaseFoodOutMoneyVo(purchaseFoodOutMoneyVo);
    int insertLogStatus = logMapper.insertLog(logDto);
    System.out.println(insertLogStatus);
    return 1;
  }
}
