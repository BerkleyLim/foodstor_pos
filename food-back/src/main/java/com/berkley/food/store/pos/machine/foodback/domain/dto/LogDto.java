package com.berkley.food.store.pos.machine.foodback.domain.dto;

import lombok.Data;

@Data
public class LogDto {
  Long lno;
  Long uno;
  Long pageNo;
  String pageEventTitle;
  String pageEventView;
  String crtTime;
}
