package com.berkley.food.store.pos.machine.foodback.domain.dto.account;

import com.berkley.food.store.pos.machine.foodback.domain.vo.account.AccountVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AccountDto {
  Long ano;
  Long uno;
  Long userMoney;

  // 이 부분은 Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static AccountDto from(AccountVo accountVo) {
    if (accountVo == null)
      return null;

    return AccountDto.builder()
        .uno(accountVo.getUno())
        .userMoney(accountVo.getUserMoney())
        .build();
  }
}