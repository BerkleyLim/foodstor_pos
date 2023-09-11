import React from 'react'
import styles from "./index.module.scss"
import { Card, CardBody, CardHeader, Table } from 'reactstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputUserInfo from './UserInfo/InputUserInfo';
import Bank from './bank/Bank';
import MenuIndex from './menu/MenuIndex';
import PosFood from './posfood/PosFood';

const Index = (): string | any => {
  return (
    <Router>
      <div className={`${styles?.componentContainer}`}>
        <Routes>
          <Route path="/" element={<InputUserInfo />} />
          <Route path="/inputuserinfo" element={<InputUserInfo />} />
          <Route path="/menuindex" element={<MenuIndex />} />
          <Route path="/posfood" element={<PosFood />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>

        <br /><br /><br />

        <Card body className={`${styles?.kioskLog}`}>
          <CardHeader tag="h1">
            주문 정보 관련 로그
          </CardHeader>
          <CardBody>
            <Table border={1} className={`w-100`}>
              <thead className={`w-100`}>
                <th>
                  번호(lno)
                </th>
                <th>
                  사용 메뉴(selectNumber)
                </th>
                <th>
                  이벤트(event)
                </th>
                <th>
                  요청 파라미터(requestParam)
                </th>
                <th>
                  상태값(status)
                </th>
                <th>
                  기종(userAgent)
                </th>
                <th>
                  응답 파라미터(responseParam)
                </th>
              </thead>
              <tbody>
                <td>
                  1
                </td>
                <td>
                  1 - 로그인
                </td>
                <td>
                  로그인성공
                </td>
                <td>
                    userAge:"29",
                    userInfoNumber:"840501",
                    userName:"berkley",
                    userPassword:"711",
                    userPhone:"01011111111",
                    userSex:"남"
                </td>
                <td>
                  200
                </td>
                <td>
                  window11
                </td>
                <td>
                    userInfoNumber:"840501",
                    userName:"berkley",
                    userPassword:"711",
                    userPhone:"01011111111",
                    userSex:"남"
                </td>
              </tbody>
            </Table>
          </CardBody>
        </Card>

      </div>
    </Router>
  )
}

export default Index