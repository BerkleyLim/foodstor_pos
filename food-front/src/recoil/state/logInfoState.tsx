import {atom} from 'recoil'

export const logInfoState = atom({
  key: 'logInfo',
  default: [{
      lno: 1,
      pageNo: 1,
      pageEventTitle: "로그인",
      pageEventView: "로그인 진입",
      requestParam: null,
      responseStatus: 200,
      userAgent: 'windows11',
      responseParam: null,
  }],
});

/**
 * page 번호
 * 1 : 로그인
 * 2 : 메뉴
 * 3 : 계좌
 * 4 : 음식
 * 5 : 로그아웃
 * 
 * 이벤트 
 * 진입, 성공, 실패, 계좌 입/출금, 음식(장어덮밥) 주문
 */

// type LogInfo = {
//   lno: number | null,
//   pageNo: number | null,
//   pageEventTitle: string | null,
//   pageEventView: string | null,
//   requestParam: any,
//   responseStatus: number | null,
//   userAgent: string | null,
//   responseParam: any,
// }

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0