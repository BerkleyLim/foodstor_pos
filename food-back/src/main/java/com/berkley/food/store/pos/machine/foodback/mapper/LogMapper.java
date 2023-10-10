package com.berkley.food.store.pos.machine.foodback.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.berkley.food.store.pos.machine.foodback.domain.dto.log.LogDto;

@Repository
@Mapper
public interface LogMapper {
  List<LogDto> selectLog();

  int insertLog(LogDto logDto);

  int deleteLog();
}
