import {atom} from 'recoil'

export const userInfoState = atom({
  key: 'userInfo',
  default: {
      uno: 1
    , userName: 'berkley'
    , userAge: 29
    , userSex: '남'
    , userPhone: '01011111111'
    , userInfoNumber: '841111'
    , userPassword: '1111'
  }
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0