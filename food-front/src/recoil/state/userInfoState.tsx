import {atom} from 'recoil'


export interface UserInfoVo {
  // userInfoVo에 담을 변수
  uno: Number,
  userName: String,
  userAge: Number,
  userSex: String
  userPhone: String,
  userNumber: String,
  userCardPassword: String,
  lno: Number,
  pageNo: Number,
  pageEventTitle: String,
  pageEventView: String,
  crtTime: String
}

export interface UserInfoType {
  uno: 0
  , userName: ''
  , userAge: 0
  , userSex: ''
  , userPhone: ''
  , userNumber: ''
  , userPassword: ''
};

export const userInfoState = atom({
  key: 'userInfo',
  default: {
      uno: 0
    , userName: ''
    , userAge: 0
    , userSex: ''
    , userPhone: ''
    , userNumber: ''
    , userPassword: ''
  } as UserInfoType
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0