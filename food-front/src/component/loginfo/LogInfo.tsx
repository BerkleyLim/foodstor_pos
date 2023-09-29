import React from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import styles from "../index.module.scss";
import { useRecoilValue } from "recoil";
import { logInfoState } from '../../recoil/state/logInfoState'

const LogInfo = () => {
  const logInfo = useRecoilValue(logInfoState);
  return (
    <Card body className={`${styles?.kioskLog}`}>
      <CardHeader tag="h1">주문 정보 관련 로그(사용자용)</CardHeader>
      <CardBody>
        <Table border={1} className={`w-100`}>
          <thead className={`w-100`}>
            <tr>
              <th>번호(lno)</th>
              <th>사용 메뉴(selectNumber)</th>
              <th>이벤트(event)</th>
            </tr>
          </thead>
          <tbody>
            {logInfo?.map((log : any, index : number)=> 
              <tr key={index}>
                <td>{log?.lno}</td>
                <td>{log?.pageNo} - {log?.pageEventTitle}</td>
                <td>{log?.pageEventView}</td>
              </tr>
            )}
            {/* <tr>
              <td>1</td>
              <td>1 - 로그인</td>
              <td>로그인성공</td>
              <td>
                userAge:"29", userInfoNumber:"840501", userName:"berkley",
                userPassword:"711", userPhone:"01011111111", userSex:"남"
              </td>
              <td>200</td>
              <td>window11</td>
              <td>
                userInfoNumber:"840501", userName:"berkley", userPassword:"711",
                userPhone:"01011111111", userSex:"남"
              </td>
            </tr> */}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default LogInfo;
