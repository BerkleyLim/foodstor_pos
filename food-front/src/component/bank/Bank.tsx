import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { useRecoilState } from 'recoil'
import { userBankInfoState } from "../../recoil/state/userBankInfoState"

const Bank = () => {
  const [bankInfo, setBankInfo] = useRecoilState(userBankInfoState);

  console.log(bankInfo)
  const decrementMoney = () => {
    let tempBankInfo = {
      bno: bankInfo?.bno,
      userMoney: bankInfo.userMoney - 100000
    }
    setBankInfo(tempBankInfo)
  }
  const incrementMoney = () => {
    let tempBankInfo = {
      bno: bankInfo?.bno,
      userMoney: bankInfo.userMoney + 100000
    }
    setBankInfo(tempBankInfo)
  }

  return (
    <div>
      <Header />

      <div className={`${styles?.container} ${styles?.bankContainer}`}>
        <h1>계좌 조회</h1>
        <div style={{ textAlign:"right" }}>
          <Button onClick={() => {window.history.back()}}>뒤로가기</Button>
        </div>
        <Card className={``}>
          <CardBody>
            <div className={styles?.moneyTextInfo}>현재 잔액 : <span className={styles?.moneyText}>{bankInfo?.userMoney}</span>원</div>
            <br/><br/><br/>
            <span className={styles?.info}>※ 입출금은 100,000원 단위로 증감 합니다..</span>
            <br/><br/>
            <Row className={`justify-align`}>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button className={`w-100`} onClick={() => incrementMoney()}>입금</Button>
              </Col>
              <Col sm={{ offset: 7, size: "auto" }}>
                <Button className={`w-100`} onClick={() => decrementMoney()}>출금</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>

    </div>
  )
}

export default Bank