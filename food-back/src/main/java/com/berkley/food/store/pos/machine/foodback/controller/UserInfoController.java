package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo.UserInfoDto;
import com.berkley.food.store.pos.machine.foodback.service.UserInfoService;

@RestController
@RequestMapping("/api/user/info")
public class UserInfoController {
  @Autowired
  UserInfoService userInfoService;

  /**
   * API : 회원 정보 조회 서비스
   * 
   * @return : 전체 회원 정보 조회 추가 (연습용 프로젝트이므로, 실질적으로 1개만 저장 됨)
   */
  @GetMapping("/")
  public List<UserInfoDto> selectUserInfo() {
    return userInfoService.selectUserInfo();
  }

  /**
   * @param userInfoDto : 회원 정보 입력 내용 추가
   * @return : 삽입 성공 값
   */
  @PostMapping("/insert/user/info")
  public int insertUserInfo(
      @RequestBody UserInfoDto userInfoDto) {
    return userInfoService.insertUserInfo(userInfoDto);
  }

  /**
   * @param userInfoDto : 회원 정보 입력 내용 추가
   * @return : 삭제 성공 값
   */
  @PostMapping("/delete/user/info")
  public int deleteUserInfo() {
    return userInfoService.deleteUserInfo();
  }

}
