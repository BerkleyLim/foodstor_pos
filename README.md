# foodstor_pos
This is the program on foot store pos machine.

## 개발 목적
- Github 토이 프로젝트로 알고리즘 실력 올리는 프로젝트의 목적으로 시작
- 현업에서 최상의 퍼포먼스를 내기 위한 숙련도를 쌓는 프로젝트 중 하나인 프로젝트
- 이 프로젝트는 모의 프로젝트를 이용하여 실제 실무력을 올리기 위해 개발을 진행 한다.
- 이를 토대로 웹으로 개발을 하여 실제로 돌아가는 프로그램으로 구현
- 현재 Typescript와 React-Query를 익히고, H2 Database 활용도를 높인다
- React를 이용하여 프론트엔드 적용, Spring Boot와 Java 로직을 이용하여 포스기 로직, 계산기 로직, 음식점 로직을 활용하여 적용
- 실제 포스 프로그램 처럼 제작을 해보고, 본인 정보와 은행 입출금 및 조회 알고리즘을 도입하여 잔액 계산을 해보자

## 개발 기간
- 23년 9월 8일 ~

## 개발 환경
- OS : Windows 11
- Tool : VS code
- Java 11
- Nodejs : 16.18.0
- 형상 관리 : Git

## 사용 스택
(1) 인프라(서버)
- Window, Local 서버에서 활용 (Getting Start 업로드 예정)

(2) 프론트 엔드
- React, React-Query, Typescript, react-strap, bootstrap, scss/sass, React-Router, react-router-dom, recoil

(3) 백엔드
- Java, Spring Boot, My-Batis, H2 Database, Spring JDBC, 

(4) App
- React Native(옵션), @react-navigation/stack, @react-navigaation/native, react-native-gesture-handler, react-native-reanimated, react-native-screens, react-native-safe-area-context, @react-native-community/masked-view

## 파급효과
- 개발 숙련도가 보다 더 향상하는 계기가 되었다
- Typescript에 대해 접할 수 있는 기회가 되었다
- React-Query 사용하는 방법에 대해 숙지할 수 있다
- Java기반으로 백엔드 로직을 구현 할 수 있다.
- H2 Database를 활용 할 수 있다.
- 웹 개발 부분에 있어 자신감 있게 개발 가능 할 수 있었다.



## 블로그 - 추후 업데이트
- [(1) 요구사항 설정 및 설계](https://berkley.tistory.com/45)
- [(2) 개발 설정 : front, Back-End](https://berkley.tistory.com/46)
- [(3) 화면단 개발(1) - 고객 정보 입력 개발 및 서비스 개발](https://berkley.tistory.com/47)
- [(4) 화면단 개발(2) - 계좌 처리 화면 서비스 개발](https://berkley.tistory.com/48)
- [(5) 화면단 개발(3) - 음식점 포스 프로그램 개발(키오스크) 및 서비스 개발](https://berkley.tistory.com/49)
- [(6) 화면단 개발(4) - 이벤트 로그 컴포넌트 구성](https://berkley.tistory.com/50)
- [(7) 백엔드 인터페이스 개발(1) - Database 설계(H2 Database 기반)]()
- [(8) 백엔드 인터페이스 개발(2) - 데이터 조작 SQL 쿼리 Mapper.xml 삽입]()
- [(9) 백엔드 인터페이스 개발(3) - 고객 정보 인터페이스 개발 후 테스트]()
- [(10) 백엔드 인터페이스 개발(4) - 계좌 처리 인터페이스 개발 후 테스트]()
- [(11) 백엔드 인터페이스 개발(5) - 이벤트 로그 Interceptor를 이용하여 저장 후 테스트]()
- [(12) 프론트엔드 백엔드 API 연동(1)]()
- [(13) 프론트엔드 백엔드 API 연동(2)]()
- [별첨1 - React-Query 사용 방법]()
- [별첨2 - Spring Boot H2 Database 사용 방법]()
- [별첨3 - React Native를 이용한 Native App 개발]()

## 요구사항
- 고객사께서 직접 음식점을 차리고 있는 상황이다.
- 여기서, 현재 최저 임금이 오르고, 음식값이 비싸진 상황에서 직원 수를 줄여야 하는 상황이다.
- 여기서 음식 주문 시 키오스크를 활용해 기계로 주문 해야 하는 프로그램이 필요로 하다.
- 따라서 키오스크에 필요한 포스기를 활용하여 주문하는 프로그램을 제작해주세요.
- 만일, 장어덮밥 : 5000원, 감자튀김 : 4000원, 김밥 : 1000원 일 경우 해당 메뉴를 선택할 수 있게 만들어 주세요.
- 선택 메뉴에 부가세 10%를 포함한 금액을 화면단에 출력하여 보내주세요.
- - 예) 장어덮밥 가격 : 5500원, 감자튀김 : 4400원, 김밥 : 1100원
- 전제 조건 : 고객입장이라고 생각하고, 고객의 통장 잔고를 확인하고, 통장 잔고가 부족할 시 구매할 수 없다는 문구 추가
- 시작은 고객 정보(나이, 성별, 전화번호, 주민번호 앞자리 6자리, 카드 비밀번호 4자리) 화면 보여주고 메뉴 선택
- 백엔드에서는 선택한 메뉴와 고객의 정보와 잔고를 활용하여 프로그램 작성
- Native App에서 프론트엔드 UI 비슷하게 화면 구성해보기


## Getting Start
- 프론트엔드(React)
- - 
- 백엔드(Spring boot)
- -
- 모바일앱(React Native) : Android
- -
