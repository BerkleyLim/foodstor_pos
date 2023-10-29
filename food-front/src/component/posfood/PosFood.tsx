import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import styles from "../index.module.scss"
import Header from '../Header'
import { useRecoilState, useRecoilValue } from 'recoil'
import { FoodTypeVo, foodState } from "../../recoil/state/foodState"
import { userBankInfoState } from "../../recoil/state/userBankInfoState"
import { userInfoState } from '../../recoil/state/userInfoState'
import { useMutation } from 'react-query'

const PosFood = () => {
  const food = useRecoilValue(foodState);
  const [bankInfo, setBankInfo] = useRecoilState(userBankInfoState);
  const userInfo = useRecoilValue(userInfoState);

  /** 로그값 추가 */
  const today = new Date();

  // api 전송 (계좌 어데이트 )
  const purchaseMoney = useMutation(async (update:FoodTypeVo) => {
    const response = await fetch('http://localhost:8080/api/food/purchase', {
      method: 'POST',
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }, {
    onSuccess: () => {
      console.log("구입 성공")
      fetchSelect();
    }
  });

  // 공통으로 쓰기
  const fetchSelect = () => {
    const uno = (!!userInfo?.uno) ? userInfo?.uno : 0
    fetch('http://localhost:8080/api/account/'+uno).then( 
        (res) => res.json()
      ).then( (res) => {
        console.log(res)
        setBankInfo(res)
    }).catch((e) => console.log(e))
  }

  // 구입 시 선택
  const purchaseFood = (f: any | Object) => {

    /** 구입의 대한 로그에 담는다 */
    const foodTypeVo: FoodTypeVo = {
      fno: f?.fno,
      uno: userInfo.uno,
      pageNo: 4,
      pageEventTitle: "음식 주문",
      pageEventView: "음식 주문 : " + f?.foodMenu + "[" + (f?.foodPrice + f?.VAT) + "원], 잔액[" + (bankInfo?.userMoney as number - f?.foodPrice - f?.VAT) + "원]",
      crtTime: JSON.stringify(today),
    }

    purchaseMoney.mutate(foodTypeVo)

  }
  return (
    <div>
      <Header />
      <div className={`${styles?.container}`}>
        <h1>음식 메뉴</h1>
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => { window.history.back() }}>뒤로가기</Button>
        </div>
        <div className={styles?.moneyTextInfo}>현재 잔액 : <span className={styles?.moneyText}>{bankInfo?.userMoney as number}</span>원</div>
        <Row className={`mt-5`}>
          {food?.map((f, index) =>
            <Col md={4} key={index} className={`mb-5`}>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      {f?.foodMenu} : {(f?.foodPrice + f?.VAT)}원
                    </Col>
                    <Col>
                      <Button onClick={() => purchaseFood(f)}>선택</Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>)}
        </Row>
      </div>

    </div>
  )
}

export default PosFood