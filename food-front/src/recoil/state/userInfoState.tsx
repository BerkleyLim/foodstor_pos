import {atom} from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'recoil-persist', // this key is using to store data in local storage
  storage: localStorage, // configure which storage will be used to store the data
  converter: JSON // configure how values will be serialized/deserialized in storage
})

export interface UserInfoVo {
  // userInfoVo에 담을 변수
  uno: number,
  userName: string,
  userAge: number,
  userSex: string
  userPhone: string,
  usernumber: string,
  userCardPassword: string,
  lno: number,
  pageNo: number,
  pageEventTitle: string,
  pageEventView: string,
  crtTime: string
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
  } as UserInfoType,
  effects_UNSTABLE: [persistAtom],
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0