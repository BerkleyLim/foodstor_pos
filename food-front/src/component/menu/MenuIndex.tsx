import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Col, Row } from 'reactstrap'
import { useNavigate } from 'react-router'
import { useResetRecoilState } from 'recoil'
import { userInfoState } from '../../recoil/state/userInfoState'
import { logInfoState } from '../../recoil/state/logInfoState'
import { userBankInfoState } from '../../recoil/state/userBankInfoState'
import { useMutation } from 'react-query'

// // 유저 정보 제거 - 이부분은 예시로 놔둠

const MenuIndex = () => {
  const navigate = useNavigate();

  // default 값으로 reset용
  const resetUserInfo = useResetRecoilState(userInfoState);
  const resetLogInfo = useResetRecoilState(logInfoState);
  const resetUserBankInfo = useResetRecoilState(userBankInfoState);
  
  // 리액트 쿼리로 남김
  // 유저 정보 제거
  const deleteUserInfo = useMutation(async (removeData) => {
    const response = await fetch('http://localhost:8080/api/user/info/delete/user/info', {
      method: 'POST',
      body: JSON.stringify(removeData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response;
  }, {
    onSuccess: () => {
      resetUserInfo();
      resetUserBankInfo();
      resetLogInfo();
    }
  });


  const pageMoveClick = (url:any) => {
    if (url === '/inputuserinfo') {
      // recoil state 값 default 초기화
      // 유저 정보 초기화
      // 계좌 초기화
      // 로그 초기화
      deleteUserInfo.mutate()
      
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