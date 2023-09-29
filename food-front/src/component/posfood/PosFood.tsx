import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import styles from "../index.module.scss"
import Header from '../Header'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { foodState } from "../../recoil/state/foodState"
import { userBankInfoState } from "../../recoil/state/userBankInfoState"
import { logInfoState } from '../../recoil/state/logInfoState'

const PosFood = () => {
  const food = useRecoilValue(foodState);
  const [bankInfo, setBankInfo] = useRecoilState(userBankInfoState);

  /** 로그값 추가 */
  const logInfo: any[] = useRecoilValue(logInfoState);
  const setLogInfo = useSetRecoilState(logInfoState);

  // 구입 시 선택
  const purchaseFood = (f:any | Object) => {
    let tempBankInfo = {
      bno: bankInfo?.bno,
      userMoney: bankInfo.userMoney - f?.foodPrice - f?.VAT
    }

    
    /** 구입의 대한 로그에 담는다 */
    const createLog: any = {
      lno: logInfo.length + 1,
      uno: 1,
      pageNo: 4,
      pageEventTitle: "음식 주문",
      pageEventView: "음식 주문 : " + f?.foodMenu + "["+  (f?.foodPrice + f?.VAT) +"원], 잔액["+tempBankInfo.userMoney+"원]",
    }

    setLogInfo(
      [...logInfo,
      createLog]
    )


    setBankInfo(tempBankInfo)
  }
  return (
    <div>
      <Header />
      <div className={`${styles?.container}`}>
        <h1>음식 메뉴</h1>
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => { window.history.back() }}>뒤로가기</Button>
        </div>
        <div className={styles?.moneyTextInfo}>현재 잔액 : <span className={styles?.moneyText}>{bankInfo?.userMoney}</span>원</div>
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