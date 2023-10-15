package com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo;

import com.berkley.food.store.pos.machine.foodback.domain.vo.userinfo.UserInfoVo;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserInfoDto {
  Long uno;
  String userName;
  Long userAge;
  String userSex;
  String userPhone;
  String userNumber;
  String userCardPassword;

  // 이 부분은 Vo에서 받아온 메소드를 dto에 넣기 위해 실행
  public static UserInfoDto from(UserInfoVo userInfoVo) {
    if (userInfoVo == null)
      return null;

    return UserInfoDto.builder()
        .uno(userInfoVo.getUno())
        .userName(userInfoVo.getUserName())
        .userAge(userInfoVo.getUserAge())
        .userSex(userInfoVo.getUserSex())
        .userPhone(userInfoVo.getUserPhone())
        .userNumber(userInfoVo.getUserNumber())
        .userCardPassword(userInfoVo.getUserCardPassword())
        .build();
  }
}
