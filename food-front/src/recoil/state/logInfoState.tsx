import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
    key: 'recoil-persist', // this key is using to store data in local storage
    storage: localStorage, // configure which storage will be used to store the data
    converter: JSON // configure how values will be serialized/deserialized in storage
});
export interface UpdateLogInfoType {
    uno: number
    pageNo: number,
    pageEventTitle: string,
    pageEventView: string,
    crtTime: string,
};

export interface CreateLogInfoType {
    pageNo: number,
    pageEventTitle: string,
    pageEventView: string,
    crtTime: string,
};

export interface LogInfoType {
    lno: number,
    uno: number, // 누가 로그인 했는지 알 수 없음 (-1로 지정)
    pageNo: number,
    pageEventTitle: string,
    pageEventView: string,
    crtTime: string,
};


export const logInfoState = atom({
  key: 'logInfo',
  default: [] as LogInfoType[],
  // default: [{
  //     lno: 1,
  //     uno: -1, // 누가 로그인 했는지 알 수 없음 (-1로 지정)
  //     pageNo: 1,
  //     pageEventTitle: "로그인",
  //     pageEventView: "로그인 진입",
  //     crtTime: JSON.stringify(today),
  // }],
  effects_UNSTABLE: [persistAtom]
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


// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0