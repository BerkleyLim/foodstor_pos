import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { userBankInfoState } from "../../recoil/state/userBankInfoState"
import { logInfoState } from '../../recoil/state/logInfoState'

const Bank = () => {
  const [bankInfo, setBankInfo] = useRecoilState(userBankInfoState);

    /** 로그값 추가 */
    const logInfo: any[] = useRecoilValue(logInfoState);
    const setLogInfo = useSetRecoilState(logInfoState);

  console.log(bankInfo)
  const decrementMoney = () => {
    let tempBankInfo = {
      bno: bankInfo?.bno,
      userMoney: bankInfo.userMoney - 100000
    }
    setBankInfo(tempBankInfo)

    /** 로그에 담는다 */
    const createLog: any = {
      lno: logInfo.length + 1,
      pageNo: 3,
      pageEventTitle: "계좌",
      pageEventView: "출금 10만원, 남은 잔액 : " + (bankInfo.userMoney - 100000) + "원",
      requestParam: JSON.stringify(tempBankInfo),
      responseStatus: 200,
      userAgent: 'windows11',
      responseParam: JSON.stringify(tempBankInfo),
    }

    setLogInfo(
      [...logInfo,
      createLog]
    )
  }
  const incrementMoney = () => {
    let tempBankInfo = {
      bno: bankInfo?.bno,
      userMoney: bankInfo.userMoney + 100000
    }
    setBankInfo(tempBankInfo)

    /** 로그에 담는다 */
    const createLog: any = {
      lno: logInfo.length + 1,
      pageNo: 3,
      pageEventTitle: "계좌",
      pageEventView: "출금 10만원, 남은 잔액 : " + (bankInfo.userMoney + 100000) + "원",
      requestParam: JSON.stringify(tempBankInfo),
      responseStatus: 200,
      userAgent: 'windows11',
      responseParam: JSON.stringify(tempBankInfo),
    }

    setLogInfo(
      [...logInfo,
      createLog]
    )
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