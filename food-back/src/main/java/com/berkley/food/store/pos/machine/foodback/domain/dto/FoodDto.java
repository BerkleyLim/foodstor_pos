package com.berkley.food.store.pos.machine.foodback.domain.dto;

import lombok.Data;

@Data
public class FoodDto {
  Long fno;
  String foodMenu;
  int foodPrice;
  int vat;
}