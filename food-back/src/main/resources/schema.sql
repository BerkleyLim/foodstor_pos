-- 테스트 샘플용 DDL
-- DROP TABLE IF EXISTS t_test;

-- CREATE TABLE t_test COMMENT '회원'  (
--   uno bigint not null auto_increment,
--   test_field varchar(255),
--   PRIMARY KEY (uno)
-- );

 
-- 회원 정보
DROP TABLE IF EXISTS t_user;

CREATE TABLE t_user COMMENT '회원'  (
  uno bigint not null auto_increment COMMENT '회원정보 인덱스',
  user_name varchar(255) COMMENT '회원이름',
  user_age bigint COMMENT '회원 나이',
  user_sex varchar(255) COMMENT '회원 성별',
  user_phone varchar(255) COMMENT '회원 연락처',
  user_number varchar(255) COMMENT '회원 주민 번호',
  user_card_password varchar(255) COMMENT '회원 카드 비밀번호',
  PRIMARY KEY (uno)
);

-- 은행 계좌 잔액
DROP TABLE IF EXISTS t_account;

CREATE TABLE t_account COMMENT '은행계좌'  (
  ano bigint not null auto_increment COMMENT '은행 계좌 테이블 인덱스',
  uno bigint COMMENT '회원 은행 계좌 인덱스',
  user_money bigint COMMENT '회원 계좌 잔액 정보',
  PRIMARY KEY (ano)
);


-- 음식 정보
DROP TABLE IF EXISTS t_food;

CREATE TABLE t_food COMMENT '음식정보'  (
  fno bigint not null auto_increment COMMENT '음식 메뉴 인덱스',
  food_menu varchar(255) COMMENT '음식 메뉴 정보',
  food_price bigint COMMENT '음식 메뉴 가격',
  VAT bigint COMMENT '음식 메뉴 부가세 (10%)',
  PRIMARY KEY (fno)
);

-- 이벤트 관련 로그 저장(사용자용)
DROP TABLE IF EXISTS t_log;

CREATE TABLE t_log COMMENT '로그 저장'  (
  lno bigint not null auto_increment COMMENT '로그 인덱스 번호',
  uno bigint COMMENT '유저 인덱스 번호',
  page_no bigint COMMENT '페이지 이벤트 번호',
  page_event_title varchar(255) COMMENT '페이지 별 이벤트 목록',
  page_event_view varchar(255) COMMENT '페이지 별 이벤트 상세',
  crt_time dateTime COMMENT '로그 생성 날짜',
  PRIMARY KEY (lno)
);