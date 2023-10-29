import { Col, Row } from 'reactstrap'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styles from "./index.module.scss"
import { userInfoState } from '../recoil/state/userInfoState'
import { useQuery } from 'react-query';
import { useEffect } from 'react';


const Header = (): String | any => {
  const setUserInfo = useSetRecoilState(userInfoState);
  const userInfo = useRecoilValue(userInfoState);

  const { isLoading, isError, data } = useQuery({
    queryKey: ['userInfoQuery'],
    queryFn: () =>
      fetch('http://localhost:8080/api/user/info/').then(
        (res) => res.json(),
      ),
  });

  if (isLoading) return 'Loading...';

  if (isError) return 'An error has occurred : ';

  setUserInfo(data[0]);

  return (
    <div className={`${styles?.headerComponent} mb-5`}>
      <Row>
        <Col>이름 : {userInfo?.userName} ({userInfo?.userAge})</Col>
        <Col>주민번호 : {userInfo?.userNumber}</Col>
      </Row>
      <Row>
        <Col>성별 : {userInfo?.userSex}</Col>
        <Col>전화번호 : {userInfo?.userPhone}</Col>
      </Row>
    </div>
  )
}

export default Header