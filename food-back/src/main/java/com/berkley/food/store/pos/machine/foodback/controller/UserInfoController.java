package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo.UserInfoDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.userinfo.UserInfoVo;
import com.berkley.food.store.pos.machine.foodback.service.AccountService;
import com.berkley.food.store.pos.machine.foodback.service.LogService;
import com.berkley.food.store.pos.machine.foodback.service.UserInfoService;

@RestController
@RequestMapping("/api/user/info")
public class UserInfoController {
  @Autowired
  UserInfoService userInfoService;
  @Autowired
  LogService logService;
  @Autowired
  AccountService accountService;

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
      // @RequestBody UserInfoDto userInfoDto) {
      // return userInfoService.insertUserInfo(userInfoDto);
      @RequestBody UserInfoVo userInfoVo) {
    /**
     * 아래부터 개발 만 했을 경우, 정상적으로 로직이 잘 돌아가나
     * 단점은 API 처리 도중 중간에 에러 날 경우 이상 DB가 나올 수 있다.
     * 유저는 정상적으로 삽입이 되었으나, 로그 기록에 남길 경우 로그 기록에 안남는 경우가 있다.
     * 혼자서 토이프로젝트 진행 시 문제없이 잘 돌아가지만
     * 실제 현업 프로젝트에서는 데이터 규모와 사용량이 많기 때문에 응답시간 초과일 경우
     * 중간에 에러가 나는 부분이 있을 수 있으므로 이에 참고 바람
     */
    // 유저 삽입
    UserInfoDto userInfoDto = UserInfoDto.from(userInfoVo);
    System.out.println(userInfoDto.toString());

    int insertUserInfoStatus = userInfoService.insertUserInfo(userInfoDto);
    System.out.println(insertUserInfoStatus);

    // 계좌 추가

    long userMoney = 200000;
    AccountDto accountDto = AccountDto.fromInitInsert(
        userInfoService.selectLastRowUno(),
        userMoney);

    int insertAccountStatus = accountService.insertAccount(accountDto);
    System.out.println(insertAccountStatus);

    // 로그 삽입
    LogDto logDto = LogDto.fromUserInfo(userInfoVo);
    // 마지막 행 출력 이용하여, 유저 삽입 시 auto로 생성된 uno를 넣는다.
    logDto.setUno(userInfoService.selectLastRowUno());
    System.out.println(logDto.toString());

    int insertLogStatus = logService.insertLog(logDto);
    System.out.println(insertLogStatus);
    return 1;
  }

  /**
   * @param userInfoDto : 회원 정보 입력 내용 추가
   * @return : 삭제 성공 값
   */
  @PostMapping("/delete/user/info")
  public int deleteUserInfo() {
    int deleteUserInfoStatus = userInfoService.deleteUserInfo();
    System.out.println(deleteUserInfoStatus);
    int deleteLogStatus = logService.deleteLog();
    System.out.println(deleteLogStatus);
    return 1;
  }

}
