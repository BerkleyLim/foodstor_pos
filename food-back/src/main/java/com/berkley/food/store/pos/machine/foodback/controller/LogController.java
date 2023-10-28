package com.berkley.food.store.pos.machine.foodback.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.service.LogService;

@RestController
@RequestMapping("/api/log")
public class LogController {
  @Autowired
  LogService logService;

  /**
   * API : 로그 정보 조회 서비스
   * 
   * @return : 전체 로그 정보 조회 추가
   */
  @GetMapping("/")
  public List<LogDto> selectLog() {
    return logService.selectLog();
  }

  /**
   * @param logDto : 로그 정보 입력 내용 추가
   * @return : 삽입 성공 값
   */
  @PostMapping("/insert/log")
  public int insertLog(
      @RequestBody LogDto logDto) {
    return logService.insertLog(logDto);
  }

  // /**
  // * @return : 제거 성공 값
  // */
  // @PostMapping("/delete/log")
  // public int deleteLog() {
  // return logService.deleteLog();
  // }

}
