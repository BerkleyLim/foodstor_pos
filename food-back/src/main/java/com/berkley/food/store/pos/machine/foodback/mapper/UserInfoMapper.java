package com.berkley.food.store.pos.machine.foodback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo.UserInfoDto;

@Repository
@Mapper
public interface UserInfoMapper {
  List<UserInfoDto> selectUserInfo();

  int insertUserInfo(UserInfoDto userInfoDto);

  int deleteUserInfo();
}
