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

- **OS**: Windows 11
- **Tool**: VS Code
- **프론트 엔드**: React, React-Query, Typescript, Reactstrap, Bootstrap, SCSS/SASS, React-Router, react-router-dom, Recoil
- **백엔드**: Java11, Spring Boot, MyBatis, H2 Database
- **형상 관리**: Git
<br/>
  
## 주요 기능

- 사용자 정보 입력
- 메뉴 선택 및 주문
- 부가세 포함한 금액 계산
- 통장 잔고 확인 및 부족 시 알림
- 사용자 이벤트 로그 기록
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

## 요구사항

- 음식점 운영을 가정하여 최저 임금 인상 및 음식값 상승으로 직원 수를 줄여야 하는 상황에서 키오스크를 통한 주문 프로그램 필요
- 장어덮밥 (5000원), 감자튀김 (4000원), 김밥 (1000원) 메뉴를 선택할 수 있게 구현
- 부가세 10% 포함한 금액을 화면에 출력
  - 예: 장어덮밥 가격 5500원, 감자튀김 가격 4400원, 김밥 가격 1100원
- 통장 잔고를 확인하고, 잔고 부족 시 구매 불가 문구 표시
- 고객 정보(나이, 성별, 전화번호, 주민번호 앞자리 6자리, 카드 비밀번호 4자리)를 입력받고 메뉴 선택 화면으로 이동
- 백엔드에서 선택한 메뉴와 고객 정보를 활용하여 프로그램 작성
- Native App에서 프론트엔드 UI와 유사한 화면 구성
<br/>

## 기여 방법

1. 프로젝트를 Fork 합니다.
2. 새로운 브랜치를 생성합니다. (`git checkout -b feature/AmazingFeature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/AmazingFeature`)
5. Pull Request를 엽니다.
<br/>

## 라이선스

해당 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하십시오.
