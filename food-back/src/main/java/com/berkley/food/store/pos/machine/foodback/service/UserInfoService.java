package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.UserInfoDto;
import com.berkley.food.store.pos.machine.foodback.mapper.UserInfoMapper;

@Service
public class UserInfoService {
  @Autowired
  UserInfoMapper userInfoMapper;

  /**
   * 회원 전체 조회
   * 
   * @return
   */
  public List<UserInfoDto> selectUserInfo() {
    return userInfoMapper.selectUserInfo();
  }

  /**
   * 회원 전체 삭제
   * 
   * @return
   */
  public int deleteUserInfo() {
    return userInfoMapper.deleteUserInfo();
  }

  /**
   * 회원 삽입
   * 
   * @return
   */
  public int insertUserInfo(UserInfoDto userInfoDto) {
    return userInfoMapper.insertUserInfo(userInfoDto);
  }
}
