import React from 'react'
import { Col, Row } from 'reactstrap'
import styles from "./index.module.scss"

const Header = ({userInfo}:any) => {
  console.log(userInfo)
  return (
    <div className={`${styles?.headerComponent} mb-5`}>
      <Row>
        <Col>이름 : Berkley (29)</Col>
        <Col>주민번호 : 840501</Col>
      </Row>
      <Row>
        <Col>성별 : 남</Col>
        <Col>전화번호 : 01011111111</Col>
      </Row>
    </div>
  )
}

export default Header