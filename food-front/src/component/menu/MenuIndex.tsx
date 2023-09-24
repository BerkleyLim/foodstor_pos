import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router'
import { useResetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/state/userInfoState'
import { logInfoState } from '../../recoil/state/logInfoState'
import { userBankInfoState } from '../../recoil/state/userBankInfoState'

const MenuIndex = () => {
  const navigate = useNavigate();
  
  // default 값으로 reset용
  const resetUserInfo = useResetRecoilState(userInfoState);
  const resetLogInfo = useResetRecoilState(logInfoState);
  const resetUserBankInfo = useResetRecoilState(userBankInfoState);
  
  const pageMoveClick = (url:any) => {
    // Partial<Path> path = new Partial<>(url);
    if (url === '/inputuserinfo') {
      // recoil state 값 default 초기화
      resetUserInfo();
      // 계좌 초기화
      resetUserBankInfo();
      // 로그 초기화
      resetLogInfo();
    }
    navigate(url);
  }
  return (
    <div>
      <Header />
      <div className={`${styles?.container} ${styles?.menuBarContainer}`}>
        <h1>메뉴 선택</h1>
        <div className={`${styles?.menuBar} mt-5`}>
          <Row>
            <Col>
              <Button onClick={() => {pageMoveClick('/bank')}}>계좌 조회</Button>
            </Col>
            <Col>
              <Button onClick={() => {pageMoveClick('/posfood')}}>음식 주문</Button>
            </Col>
            <Col>
              <Button onClick={() => {pageMoveClick('/inputuserinfo')}}>종료(처음 화면으로 돌아가기)</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default MenuIndex