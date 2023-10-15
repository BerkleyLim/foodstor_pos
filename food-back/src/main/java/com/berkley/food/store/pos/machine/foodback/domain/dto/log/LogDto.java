package com.berkley.food.store.pos.machine.foodback.domain.dto.log;

import com.berkley.food.store.pos.machine.foodback.domain.vo.account.AccountVo;
import com.berkley.food.store.pos.machine.foodback.domain.vo.food.PurchaseFoodOutMoneyVo;
import com.berkley.food.store.pos.machine.foodback.domain.vo.userinfo.UserInfoVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class LogDto {
  Long lno;
  Long uno;
  Long pageNo;
  String pageEventTitle;
  String pageEventView;
  String crtTime;

  // 이 부분은 UserInfo Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static LogDto fromUserInfo(UserInfoVo userInfoVo) {
    if (userInfoVo == null)
      return null;

    return LogDto.builder()
        .lno(userInfoVo.getLno())
        .uno(userInfoVo.getUno())
        .pageNo(userInfoVo.getPageNo())
        .pageEventTitle(userInfoVo.getPageEventTitle())
        .pageEventView(userInfoVo.getPageEventView())
        .crtTime(userInfoVo.getCrtTime())
        .build();
  }

  // 이 부분은 AccountInOutMoney Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static LogDto fromAccountInOutMoney(AccountVo accountInOutMoneyVo) {
    if (accountInOutMoneyVo == null)
      return null;

    return LogDto.builder()
        .lno(accountInOutMoneyVo.getLno())
        .uno(accountInOutMoneyVo.getUno())
        .pageNo(accountInOutMoneyVo.getPageNo())
        .pageEventTitle(accountInOutMoneyVo.getPageEventTitle())
        .pageEventView(accountInOutMoneyVo.getPageEventView())
        .crtTime(accountInOutMoneyVo.getCrtTime())
        .build();
  }

  // 이 부분은 AccountPurchaseMoney Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static LogDto fromPurchaseFoodOutMoneyVo(PurchaseFoodOutMoneyVo purchaseFoodOutMoneyVo) {
    if (purchaseFoodOutMoneyVo == null)
      return null;

    return LogDto.builder()
        .lno(purchaseFoodOutMoneyVo.getLno())
        .uno(purchaseFoodOutMoneyVo.getUno())
        .pageNo(purchaseFoodOutMoneyVo.getPageNo())
        .pageEventTitle(purchaseFoodOutMoneyVo.getPageEventTitle())
        .pageEventView(purchaseFoodOutMoneyVo.getPageEventView())
        .crtTime(purchaseFoodOutMoneyVo.getCrtTime())
        .build();
  }
}
