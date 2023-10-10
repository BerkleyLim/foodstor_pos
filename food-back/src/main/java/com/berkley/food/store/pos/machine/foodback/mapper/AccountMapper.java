package com.berkley.food.store.pos.machine.foodback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;

@Repository
@Mapper
public interface AccountMapper {
  List<AccountDto> selectAccount();

  int insertAccount(AccountDto accountDto);

  int deleteAccount();

  int changeInOutMoney();

  int purchaseOutMoney();

}
