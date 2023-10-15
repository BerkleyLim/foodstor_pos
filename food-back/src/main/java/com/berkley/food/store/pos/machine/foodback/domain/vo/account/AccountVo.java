package com.berkley.food.store.pos.machine.foodback.domain.vo.account;

import lombok.Data;

@Data
public class AccountVo {
  // 음식 구매시의 대한 정보
  Long uno;
  Long userMoney;

  // 로그에 담을 변수 (uno는 이미 있으니 생략)
  Long lno;
  Long pageNo;
  String pageEventTitle;
  String pageEventView;
  String crtTime;
}
