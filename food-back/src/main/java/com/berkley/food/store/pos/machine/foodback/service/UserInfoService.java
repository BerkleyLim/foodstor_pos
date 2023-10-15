package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo.UserInfoDto;
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

  /**
   * 사용자 생성 시 한정으로 가장 최근 생성 된 테이블 중 uno 마지막 로그 출력
   * 
   * @return
   */
  public Long selectLastRowUno() {
    return userInfoMapper.selectLastRowUno();
  }
}
