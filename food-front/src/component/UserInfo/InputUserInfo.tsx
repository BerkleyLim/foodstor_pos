import React from 'react'
// import {
//   useQuery,
// } from 'react-query'
import styles from "../index.module.scss"
import { Card, CardHeader, Button, Form, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router';
import { userInfoState } from '../../recoil/state/userInfoState'
import { useRecoilValue, useSetRecoilState } from 'recoil';
const { useState, useEffect } = React;


const InputUserInfo = () => {
  const [createForm, setCreateForm] = useState<any>();
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoState);
  const setUserInfo = useSetRecoilState(userInfoState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    })
    // console.log(createForm)
  }

  // 입력 이후, 회원 정보가 저장 되면서 recoil에 저장 후 header에 사용자 정보 저장
  const submitUserInfo = () => {
    // 리액트 Query 작성
    alert(JSON.stringify(createForm));

    setUserInfo(createForm)

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
      {/* <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="account" onChange={onChange}/>
          <Label className="">잔액</Label>
        </Form> */}
      <Button color={"primary"} onClick={() => submitUserInfo()}>
        제 출
      </Button>
    </Card>
  )
}

export default InputUserInfo;