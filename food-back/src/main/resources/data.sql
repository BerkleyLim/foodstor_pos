-- 테스트용 DML 문
-- insert into t_test (test_field) values ('테스트용');

-- -- 회원 정보 구문 : 프론트엔드 샘플 데이터용으로 추가
-- insert into t_user
-- (user_name, user_age, user_sex, user_phone, user_number, user_card_password)
-- values ('Berkley', 29, '남', '01011111111', '880401', '1111');

-- -- 회원 은행 계좌 관련 구문
-- insert into t_account (uno, user_money) values (1, 100000);

-- 음식 메뉴 insert 구문
insert into t_food (food_menu, food_price, VAT) values ('장어덮밥',5000, 500);
insert into t_food (food_menu, food_price, VAT) values ('피자',10000,1000);
insert into t_food (food_menu, food_price, VAT) values ('치즈스틱',3000,300);
insert into t_food (food_menu, food_price, VAT) values ('로스트비프',15000,1500);
insert into t_food (food_menu, food_price, VAT) values ('감자튀김',4000,400);


-- -- 로그 insert 구문
-- insert into t_log 
-- (uno, page_no, page_event_title, page_event_view, crt_time) 
-- values 
-- (1, 1, '로그인', '로그인 진입', now());

-- 회원 정보 테스트
select * from t_user;

-- 은행 계좌 테스트
select * from t_account;

-- 음식점 테스트
select * from t_food;

-- 로그 테스트
select * from t_log;