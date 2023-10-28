package com.berkley.food.store.pos.machine.foodback.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;
import com.berkley.food.store.pos.machine.foodback.mapper.LogMapper;

@Service
public class LogService {
  @Autowired
  LogMapper logMapper;

  /**
   * 로그 전체 조회
   * 
   * @return
   */
  public List<LogDto> selectLog() {
    return logMapper.selectLog();
  }

  /**
   * 로그 전체 삭제
   * 
   * @return
   */
  public int deleteLog() {
    return logMapper.deleteLog();
  }

}
