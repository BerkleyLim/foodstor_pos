# foodstor_pos

This is the program on foot store pos machine.

<br/>

## 개발 목적

- Github 토이 프로젝트로, 타인에게 학습 자료로 제공하기 위한 목적
- Typescript와 React-Query, Recoil의 이해도를 높이고, H2 Database 활용도를 높이기 위해 진행
- React를 이용한 프론트엔드 구현, Spring Boot와 Java 로직을 통한 포스기 및 음식점 로직 구현
- 실제 포스 프로그램처럼 제작하고, 사용자 이벤트 로그 기록을 통해 테스트
<br/>

## 개발 기간

- 2023년 9월 8일 ~ 2023년 10월 28일
<br/>

## 프로젝트 구조

```
foodstor_pos/
├── front/               # 프론트엔드 소스 코드
│   ├── src/
│   ├── public/
│   └── package.json
├── back/                # 백엔드 소스 코드
│   ├── src/
│   ├── build.gradle
│   └── settings.gradle
├── README.md
└── .gitignore
```
<br/>

## 개발 환경 및 기술 스택

| **항목**      | **내용**                                                                 |
|---------------|--------------------------------------------------------------------------|
| **OS**        | Windows 11                                                               |
| **Tool**      | VS Code                                                                  |
| **프론트 엔드** | React, React-Query, Typescript, Reactstrap, Bootstrap, SCSS/SASS, React-Router, react-router-dom, Recoil |
| **백엔드**    | Java11, Spring Boot, MyBatis, H2 Database                                |
| **형상 관리** | Git                                                                      |

<br/>

## Getting Started

### 프론트엔드
```bash
# Clone the repository
git clone https://github.com/BerkleyLim/foodstor_pos.git

# Navigate to the frontend directory
cd foodstor_pos/front

# Install dependencies
npm install

# Start the development server
npm start

# For production mode
# npm run build
# serve -s build
```

### 백엔드
```bash
# Clone the repository
git clone https://github.com/BerkleyLim/foodstor_pos.git

# Navigate to the backend directory
cd foodstor_pos/back

# Start the backend server
gradle bootrun

# For production mode
# gradle build
# cd build/libs
# java -jar food-back-0.0.1-SNAPSHOT.jar

# Note: The jar file name may vary. For example, it could be food-back-0.0.2-SNAPSHOT.jar.
```
<br/>

## 기여 방법

1. 프로젝트를 Fork 합니다.
2. 새로운 브랜치를 생성합니다. (`git checkout -b feature/AmazingFeature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/AmazingFeature`)
5. Pull Request를 엽니다.
<br/>


## 프로젝트 요구사항

- 음식점 운영을 가정하여 최저 임금 인상 및 음식값 상승으로 직원 수를 줄여야 하는 상황에서 키오스크를 통한 주문 프로그램 필요
- 장어덮밥 (5000원), 감자튀김 (4000원), 김밥 (1000원) 메뉴를 선택할 수 있게 구현
- 부가세 10% 포함한 금액을 화면에 출력
  - 예: 장어덮밥 가격 5500원, 감자튀김 가격 4400원, 김밥 가격 1100원
- 통장 잔고를 확인하고, 잔고 부족 시 구매 불가 문구 표시
- 고객 정보(나이, 성별, 전화번호, 주민번호 앞자리 6자리, 카드 비밀번호 4자리)를 입력받고 메뉴 선택 화면으로 이동
- 백엔드에서 선택한 메뉴와 고객 정보를 활용하여 프로그램 작성
- Native App에서 프론트엔드 UI와 유사한 화면 구성
<br/>

## 주요 기능

- 사용자 정보 입력
- 메뉴 선택 및 주문
- 부가세 포함한 금액 계산
- 통장 잔고 확인 및 부족 시 알림
- 사용자 이벤트 로그 기록
<br/>

## 블로그

- [**[1] 음식점 포스 프로그램 - 요구사항 설정 및 설계**](https://berkley.tistory.com/45)
- [**[2] 음식점 포스 프로그램 - 개발 설정 : front, Back-End**](https://berkley.tistory.com/46)
- [**[3] 음식점 포스 프로그램 - 화면단 개발(1) - 고객 정보 입력 개발 및 서비스 개발**](https://berkley.tistory.com/47)
- [**[4] 음식점 포스 프로그램 - 화면단 개발(2) 계좌 처리 화면 서비스 개발**](https://berkley.tistory.com/48)
- [**[5] 음식점 포스 프로그램 - 화면단 개발(3) : 음식점 포스 프로그램 개발(키오스크) 및 서비스 개발**](https://berkley.tistory.com/49)
- [**[6] 음식점 포스 프로그램 - 화면단 개발(4) : 이벤트 로그 컴포넌트 구성**](https://berkley.tistory.com/50)
- [**[7] 백엔드 인터페이스 개발(1) - Database schema 설계(H2 Database 기반)**](https://berkley.tistory.com/51)
- [**[8] 백엔드 인터페이스 개발(2) - 데이터 조작 SQL 쿼리 설계**](https://berkley.tistory.com/52)
- [**[9] 백엔드 인터페이스 개발(3) - 인터페이스 개발(1), Mapper와 DTO 설계**](https://berkley.tistory.com/53)
- [**[10] 백엔드 인터페이스 개발(4) - 인터페이스 개발(2), 고객 정보 와 로그 부분(1) Service와 Controller**](https://berkley.tistory.com/54)
- [**[11] 백엔드 인터페이스 개발(5) - 인터페이스 개발(3), 음식 정보, 계좌 정보 와 로그 부분(2) Service와 Controller**](https://berkley.tistory.com/55)
- [**[12] 프론트엔드 API 연동(1) - 고객 정보, 로그 표시 연동**](https://berkley.tistory.com/56)
- [**[13] 프론트엔드 API 연동(2) - 계좌 입출금, 음식 구매 연동 (로그 파일 삽입 포함)**](https://berkley.tistory.com/57)
- [**(별첨) 프론트엔드 - 운영 시, Recoil로 이용한 새로 고침시 state 값 유지 하기**](https://berkley.tistory.com/58)
<br/>

## 라이선스

해당 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하십시오.
