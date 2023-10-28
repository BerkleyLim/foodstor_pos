package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.account.AccountDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.domain.dto.userinfo.UserInfoDto;
import com.berkley.food.store.pos.machine.foodback.domain.vo.userinfo.UserInfoVo;
import com.berkley.food.store.pos.machine.foodback.mapper.AccountMapper;
import com.berkley.food.store.pos.machine.foodback.mapper.LogMapper;
import com.berkley.food.store.pos.machine.foodback.mapper.UserInfoMapper;

@Service
public class UserInfoService {
  @Autowired
  UserInfoMapper userInfoMapper;
  @Autowired
  AccountMapper accountMapper;
  @Autowired
  LogMapper logMapper;

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
  public int insertUserInfo(UserInfoVo userInfoVo) {
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

    int insertUserInfoStatus = userInfoMapper.insertUserInfo(userInfoDto);
    System.out.println(insertUserInfoStatus);

    // 계좌 추가

    long userMoney = 200000;
    AccountDto accountDto = AccountDto.fromInitInsert(
        userInfoMapper.selectLastRowUno(),
        userMoney);

    int insertAccountStatus = accountMapper.insertAccount(accountDto);
    System.out.println(insertAccountStatus);

    // 로그 삽입
    LogDto logDto = LogDto.fromUserInfo(userInfoVo);
    // 마지막 행 출력 이용하여, 유저 삽입 시 auto로 생성된 uno를 넣는다.
    // 사용자 생성 시 한정으로 가장 최근 생성 된 테이블 중 uno 마지막 로그 출력
    logDto.setUno(userInfoMapper.selectLastRowUno());
    System.out.println(logDto.toString());

    int insertLogStatus = logMapper.insertLog(logDto);
    System.out.println(insertLogStatus);
    return userInfoMapper.insertUserInfo(userInfoDto);
  }

}
