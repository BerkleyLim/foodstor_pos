import React from 'react'
import Header from '../Header'
import styles from '../index.module.scss'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const Bank = () => {
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
            <div>현재 잔액 : <span>200000</span>원</div>
            <Row className={`justify-align`}>
              <Col>
                <Button className={`w-50`}>입금</Button>
              </Col>
              <Col>
                <Button className={`w-50`}>출금</Button>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>

    </div>
  )
}

export default Bank