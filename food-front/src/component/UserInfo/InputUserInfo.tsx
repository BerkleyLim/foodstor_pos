import React from 'react'
import styles from "../index.module.scss"
import { Card, CardHeader, Button, Form, Input, Label } from 'reactstrap'
import { useNavigate } from 'react-router';
import { UserInfoVo, userInfoState } from '../../recoil/state/userInfoState'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { CreateLogInfoType, LogInfoType, logInfoState } from '../../recoil/state/logInfoState';
import { useMutation } from 'react-query';
const { useState } = React;

const InputUserInfo = () => {
  const [createForm, setCreateForm] = useState<any>();
  const navigate = useNavigate();


  const setUserInfo = useSetRecoilState(userInfoState);

  /** 로그값 추가 */
  const logInfo: any[] = useRecoilValue(logInfoState);
  const setLogInfo = useSetRecoilState(logInfoState);
  const today = new Date();


  // 유저 정보의 관련 DB 삽입
  // 리액트 Query 작성
  const { mutate, isLoading, error} = useMutation(async (createFormVo:UserInfoVo) => {
    const response = await fetch('http://localhost:8080/api/user/info/insert/user/info', {
      method: 'POST',
      body: JSON.stringify(createFormVo),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response;
  },{
    onSuccess: () => {
      fetch('http://localhost:8080/api/user/info/').then(
        (res) =>   {
          return res.json()
      }).then( (res) => {
          setUserInfo(res[0])
      }).catch((e) => console.log(e))
    }
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    })
  }
  // 입력 이후, 회원 정보가 저장 되면서 recoil에 저장 후 header에 사용자 정보 저장
  const submitUserInfo = () => {

    setUserInfo(createForm)

    /** 로그에 담는다 */
    const createLog: CreateLogInfoType = {
      pageNo: 1,
      pageEventTitle: "로그인",
      pageEventView: "로그인 성공",
      crtTime: JSON.stringify(today),
    }

    const ob = {
      ...createForm,
      ...createLog
    }

    const response =mutate(ob);

    if (isLoading) {
      return <p>현재 지금 회원 정보 삽입 중 입니다.</p>
    }

    if (error) {
      return <p>삽입에 실패하였습니다..</p>
    }
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
        <Input className="form-control fw-bold border" name="userNumber" onChange={onChange} />
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