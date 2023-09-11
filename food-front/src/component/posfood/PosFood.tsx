import React from 'react'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'
import styles from "../index.module.scss"
import Header from '../Header'

const PosFood = () => {
  return (
    <div>
      <Header />
      <div className={`${styles?.container}`}>
        <h1>음식 메뉴</h1>
        <div style={{ textAlign:"right" }}>
          <Button onClick={() => {window.history.back()}}>뒤로가기</Button>
        </div>
        <div>현재 잔액 : 200000원</div>
        <Row className={`mt-5`}>
          <Col md={4} className={`mb-5`}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    장어 구이 : 5000원
                  </Col>
                  <Col>
                  <Button>선택</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className={`mb-5`}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    피자 : 11000원
                  </Col>
                  <Col>
                    <Button>선택</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className={`mb-5`}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    치즈스틱 : 3000원
                  </Col>
                  <Col>
                    <Button>선택</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className={`mb-5`}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    로스트 비프 : 15000원
                  </Col>
                  <Col>
                    <Button>선택</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} className={`mb-5`}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    감자튀김 : 4000원
                  </Col>
                  <Col>
                    <Button>선택</Button>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default PosFood