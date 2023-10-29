import {atom} from 'recoil'

export interface UserBankInfoVo {
  // userInfoVo에 담을 변수
  uno: Number,
  userMoney: Number,
  pageNo: Number,
  pageEventTitle: String,
  pageEventView: String,
  crtTime: String
}

export interface UserBankInfoType {
  bno: Number
  ,userMoney: Number
};


export const userBankInfoState = atom({
  key: 'userBankInfo',
  default: {
      bno: 0
    , userMoney: 0
  } as UserBankInfoType
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0