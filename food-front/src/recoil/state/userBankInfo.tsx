import {atom} from 'recoil'

export const userBankInfoState = atom({
  key: 'userBankInfo',
  default: {
      bno: 1
    , userMoney: 200000
  }
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0