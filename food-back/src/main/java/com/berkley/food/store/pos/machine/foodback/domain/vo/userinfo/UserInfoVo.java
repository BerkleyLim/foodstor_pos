package com.berkley.food.store.pos.machine.foodback.domain.vo.userinfo;

import lombok.Data;

@Data
public class UserInfoVo {
  // userInfoVo에 담을 변수
  Long uno;
  String userName;
  Long userAge;
  String userSex;
  String userPhone;
  String userNumber;
  String userCardPassword;

  // 로그에 담을 변수 (uno는 이미 있으니 생략)
  Long lno;
  Long pageNo;
  String pageEventTitle;
  String pageEventView;
  String crtTime;
}
