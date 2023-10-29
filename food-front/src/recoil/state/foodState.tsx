import {atom} from 'recoil'

export interface FoodTypeVo {
  // userInfoVo에 담을 변수
  uno: number,
  fno: number,
  pageNo: number,
  pageEventTitle: string,
  pageEventView: string,
  crtTime: string
}

export interface FoodType {
  fno: number
  ,foodMenu: string
  ,foodPrice: number
  ,VAT: number
};

export const foodState = atom({
  key: 'food',
  default: [
    {
        fno: 1
      , foodMenu: '장어구이'
      , foodPrice: 5000
      , VAT: 500
    },
    {
        fno: 2
      , foodMenu: '피자'
      , foodPrice: 10000
      , VAT: 1000
    },
    {
        fno: 3
      , foodMenu: '치즈스틱'
      , foodPrice: 3000
      , VAT: 300
    },
    {
        fno: 4
      , foodMenu: '로스트비프'
      , foodPrice: 15000
      , VAT: 1500
    },
    {
        fno: 5
      , foodMenu: '감자튀김'
      , foodPrice: 4000
      , VAT: 400
    },
  ] as FoodType[]
});

// https://velog.io/@juno7803/Recoil-Recoil-200-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0