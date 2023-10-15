package com.berkley.food.store.pos.machine.foodback.domain.dto.account;

import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AccountPurchaseMoneyDto {
  Long uno;
  Long fno;
  Long money;

  // 이 부분은 Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static AccountPurchaseMoneyDto from(PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    if (purchaseFoodOutMoneyVo == null)
      return null;

    return AccountPurchaseMoneyDto.builder()
        .uno(purchaseFoodOutMoneyVo.getUno())
        .fno(purchaseFoodOutMoneyVo.getFno())
        .money(purchaseFoodOutMoneyVo.getFoodPrice() + purchaseFoodOutMoneyVo.getVat())
        .build();
  }
}
