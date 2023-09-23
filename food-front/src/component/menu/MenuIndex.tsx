import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router'
import { useResetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/state/userInfoState'

const MenuIndex = () => {
  const navigate = useNavigate();
  
  // default 값으로 reset용
  const resetUserInfo = useResetRecoilState(userInfoState);
  
  const pageMoveClick = (url:any) => {
    // Partial<Path> path = new Partial<>(url);
    if (url === '/inputuserinfo') {
      // recoil state 값 default 초기화
      resetUserInfo();
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