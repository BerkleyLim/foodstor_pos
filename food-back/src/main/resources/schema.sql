-- 테스트
DROP TABLE IF EXISTS t_test;

CREATE TABLE t_test COMMENT '회원'  (
  uno bigint not null auto_increment,
  test_field varchar(255),
  PRIMARY KEY (uno)
);

-- -- 회원 정보
-- DROP TABLE IF EXISTS t_user;

-- CREATE TABLE t_user COMMENT '회원'  (
--   uno bigint not null auto_increment,
--   user_name varchar(255),
--   user_age bigint,
--   user_sex varchar(255),
--   user_phone varchar(255),
--   user_number varchar(255),
--   user_card_password varchar(255),
--   PRIMARY KEY (uno)
-- );

-- -- 은행 계좌 잔액
-- DROP TABLE IF EXISTS t_account;

-- CREATE TABLE t_account COMMENT '은행계좌'  (
--   uno bigint,
--   user_money varchar(255)
-- );


-- -- 음식 정보
-- DROP TABLE IF EXISTS t_food;

-- CREATE TABLE t_food COMMENT '음식정보'  (
--   fno bigint not null auto_increment,
--   food_menu varchar(255),
--   food_price bigint,
--   PRIMARY KEY (fno)
-- );

-- -- 이벤트 관련 로그 저장
-- DROP TABLE IF EXISTS t_log;

-- -- 정해지면 추가 할 것
-- CREATE TABLE t_log COMMENT '로그 저장'  (
--   lno bigint not null auto_increment,
--   PRIMARY KEY (lno)
-- );