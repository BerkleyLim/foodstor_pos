import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import { useRecoilState, useRecoilValue } from 'recoil'
import { UserBankInfoVo, userBankInfoState } from "../../recoil/state/userBankInfoState"
import { userInfoState } from '../../recoil/state/userInfoState'
import { useMutation, useQueries } from 'react-query'

// main 클래스
const Bank = () => {
  const [bankInfo, setBankInfo] = useRecoilState(userBankInfoState);
  const today = new Date();


  const userInfo = useRecoilValue(userInfoState)
  console.log(userInfo)

  // 리액트 Query 작성 
  // (결론 : 로그인 할때만 쓰자!, 실시간 갱신에 좋으나, 기기에 따라 로딩 속도가 오래 걸린다.)

  // React Query에 사용할 객체 저장
  const queries = [
    {
      queryKey: ['userAccount',1],
      queryFn: () => {
        fetchSelect();
      }
    }
  ]

  const selectQueries = useQueries(queries);

  const changeMoney = useMutation(async (update:UserBankInfoVo) => {
    const response = await fetch('http://localhost:8080/api/account/change', {
      method: 'POST',
      body: JSON.stringify(update),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response
  }, {
    onSuccess: (data) => {
      console.log(data)
      console.log("성공")
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


  
  if (selectQueries[0].isLoading) {
    return <div>현재 회원 정보 계좌 금액 출력 중 입니다.</div>
  }

  if (selectQueries[0].isError) {
    return <p>계좌 정보 불려오는 것이 실패하였습니다.</p>
  }

  console.log(bankInfo)
  // 출금 금액 로직
  const DecrementMoney = () => {

    /** 로그에 담는다 */
    const userBankInfoVo: UserBankInfoVo = {
      // lno: logInfo.length + 1,
      userMoney: bankInfo?.userMoney as number - 100000,
      uno: userInfo?.uno,
      pageNo: 3,
      pageEventTitle: "계좌",
      pageEventView: "출금 10만원, 남은 잔액 : " + (bankInfo?.userMoney as number - 100000) + "원",
      crtTime: JSON.stringify(today),
    }

    changeMoney.mutate(userBankInfoVo)
  }

  // 입금 금액 로직
  const incrementMoney = () => {
    /** 로그에 담는다 */
    const userBankInfoVo: UserBankInfoVo = {
      // lno: logInfo.length + 1,
      userMoney: bankInfo?.userMoney as number + 100000,
      uno: userInfo?.uno,
      pageNo: 3,
      pageEventTitle: "계좌",
      pageEventView: "입금 10만원, 남은 잔액 : " + (bankInfo?.userMoney as number + 100000) + "원",
      crtTime: JSON.stringify(today),
    }

    changeMoney.mutate(userBankInfoVo)

  }


  // setBankInfo(data);
  return (
    <div>
      <Header />

      <div className={`${styles?.container} ${styles?.bankContainer}`}>
        <h1>계좌 조회</h1>
        <div style={{ textAlign: "right" }}>
          <Button onClick={() => { window.history.back() }}>뒤로가기</Button>
        </div>
        <Card className={``}>
          <CardBody>
            <div className={styles?.moneyTextInfo}>현재 잔액 : <span className={styles?.moneyText}>{bankInfo?.userMoney as number}</span>원</div>
            {/* <div className={styles?.moneyTextInfo}>현재 잔액 : <span className={styles?.moneyText}>{data?.userMoney as number}</span>원</div> */}
            <br /><br /><br />
            <span className={styles?.info}>※ 입출금은 100,000원 단위로 증감 합니다..</span>
            <br /><br />
            <Row className={`justify-align`}>
              <Col sm={{ offset: 1, size: "auto" }}>
                <Button className={`w-100`} onClick={() => incrementMoney()}>입금</Button>
              </Col>
              <Col sm={{ offset: 7, size: "auto" }}>
                <Button className={`w-100`} onClick={() => DecrementMoney()}>출금</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>

    </div>
  )
}

export default Bank