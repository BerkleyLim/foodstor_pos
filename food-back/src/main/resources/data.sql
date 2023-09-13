insert into t_test (test_field) values ('테스트용');

-- CREATE TABLE t_user COMMENT '회원'  (
--   uno bigint not null auto_increment,
--   test_field varchar(255),
--   PRIMARY KEY (uno)
-- );

-- insert into "t_food" (food_menu, food_price) values ('장어덮밥','5000');

-- CREATE TABLE t_food COMMENT '음식정보'  (
--   fno bigint not null auto_increment,
--   food_menu varchar(255),
--   food_price bigint,
--   PRIMARY KEY (fno)
-- );


-- 샘플
-- insert into "t_user" 
-- (user_name, user_age, user_sex, user_phone, user_number, user_card_password) 
-- value ('Berkley', '29', '남', '01011111111, '880401', '1111')

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

-- 샘플
-- insert into "t_account" 
-- (user_money) value (100000)


-- 은행 계좌 잔액
-- CREATE TABLE t_account COMMENT '은행계좌'  (
--   uno bigint,
--   user_money varchar(255)
-- );

