package com.berkley.food.store.pos.machine.foodback.domain.dto.account;

import com.berkley.food.store.pos.machine.foodback.domain.vo.account.AccountVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder // Builder Reqeust 값 중 일부분을 Dto에 생성을 위해 작업 진행
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

  // 이 부분은 사용자 생성시 잔고 초기화 (200,000원으로 default로 초기화 해줌)
  public static AccountDto fromInitInsert(Long uno, long userMoney) {
    if (uno == null)
      return null;

    return AccountDto.builder()
        .uno(uno)
        .userMoney(userMoney)
        .build();
  }
}