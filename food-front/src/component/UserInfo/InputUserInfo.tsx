import React from 'react'
import styles from "../index.module.scss"
import { Card, CardHeader, Button, Form, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router';
import { userInfoState } from '../../recoil/state/userInfoState'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { logInfoState } from '../../recoil/state/logInfoState';
const { useState } = React;

// type LogInfo = {
//   lno: number | null,
//   pageNo: number | null,
//   pageEventTitle: string | null,
//   pageEventView: string | null,
//   requestParam: any,
//   responseStatus: number | null,
//   userAgent: string | null,
//   responseParam: any,
// }


const InputUserInfo = () => {
  const [createForm, setCreateForm] = useState<any>();
  const navigate = useNavigate();

  const setUserInfo = useSetRecoilState(userInfoState);

  /** 로그값 추가 */
  const logInfo: any[] = useRecoilValue(logInfoState);
  const setLogInfo = useSetRecoilState(logInfoState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    })
  }
  // 입력 이후, 회원 정보가 저장 되면서 recoil에 저장 후 header에 사용자 정보 저장
  const submitUserInfo = () => {
    // 리액트 Query 작성
    alert(JSON.stringify(createForm));

    setUserInfo(createForm)

    /** 로그에 담는다 */
    const createLog: any = {
      lno: logInfo.length + 1,
      pageNo: 1,
      pageEventTitle: "로그인",
      pageEventView: "로그인 성공",
      requestParam: JSON.stringify(createForm),
      responseStatus: 200,
      userAgent: 'windows11',
      responseParam: JSON.stringify(createForm),
    }

    setLogInfo(
      [...logInfo,
      createLog]
    )

    navigate('/menuindex');
  }

  return (
    <Card body className={`${styles?.kioskContainer} ${styles?.container}`}>
      <CardHeader className="mb-3" tag="h1">
        본인 개인정보 입력
      </CardHeader>
      <Form className={`form-floating mb-3`}>
        <Input className="form-control fw-bold border" name="userName" onChange={onChange} />
        <Label className="">이름</Label>
      </Form>
      <Form className="form-floating mb-3">
        <Input className="form-control fw-bold border" name="userAge" onChange={onChange} />
        <Label className="">나이</Label>
      </Form>
      <Form className="form-floating mb-3">
        <Input className="form-control fw-bold border" name="userSex" onChange={onChange} />
        <Label className="">성별</Label>
      </Form>
      <Form className="form-floating mb-3">
        <Input className="form-control fw-bold border" name="userPhone" onChange={onChange} />
        <Label className="">전화번호(- 없이 입력)</Label>
      </Form>
      <Form className="form-floating mb-3">
        <Input className="form-control fw-bold border" name="userInfoNumber" onChange={onChange} />
        <Label className="">주민번호(앞자리6글자)</Label>
      </Form>
      <Form className="form-floating mb-3">
        <Input className="form-control fw-bold border" name="userPassword" onChange={onChange} />
        <Label className="">카드비밀번호(4자리)</Label>
      </Form>
      <Button color={"primary"} onClick={() => submitUserInfo()}>
        제 출
      </Button>
    </Card>
  )
}

export default InputUserInfo;