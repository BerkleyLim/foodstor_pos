package com.berkley.food.store.pos.machine.foodback.domain.dto.food;

import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FoodPurchaseMoneyDto {
  Long uno;
  Long fno;

  // 이 부분은 Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static FoodPurchaseMoneyDto from(PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    if (purchaseFoodOutMoneyVo == null)
      return null;

    return FoodPurchaseMoneyDto.builder()
        .uno(purchaseFoodOutMoneyVo.getUno())
        .fno(purchaseFoodOutMoneyVo.getFno())
        .build();
  }
}
