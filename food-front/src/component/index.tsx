import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from 'react-query'
import styles from "./index.module.scss"
import { Card, CardHeader, Button, Form, Input, Label } from 'reactstrap'
const {useState, useEffect} = React;
// const queryClient = new QueryClient();

const Index = (): string | any => {
  const [createForm, setCreateForm] = useState<any>();

  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ['board'],
  //   queryFn: () =>
  //     // fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
  //     fetch('http://localhost:8080/api/board/').then(
  //       (res) => res.json(),
  //     ),
  // })

  // if (isLoading) return 'Loading...';

  // if (isError) return 'An error has occurred : ';

  // console.log(data)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    })
    console.log(createForm)
  }


  return (
    // <QueryClientProvider client={queryClient}>
    //   <div>shoifeijkl</div>
    // </QueryClientProvider>
    <div className={`${styles?.componentContainer}`}>
      {/* {data.map((board:any, index:number) =>
          <div key={index}>
            {board?.bno}
          </div>
        )} */}
      <Card body className={`${styles?.kioskContainer}`}>
        <CardHeader className="mb-3" tag="h1">
          본인 개인정보 입력
        </CardHeader>
        <Form className={`form-floating mb-3`}>
          <Input className="form-control fw-bold border" name="userName" onChange={onChange}/>
          <Label className="">이름</Label>
        </Form>
        <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="userAge" onChange={onChange}/>
          <Label className="">나이</Label>
        </Form>
        <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="userSex" onChange={onChange}/>
          <Label className="">성별</Label>
        </Form>
        <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="userPhone" onChange={onChange}/>
          <Label className="">전화번호(- 없이 입력)</Label>
        </Form>
        <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="userInfoNumber" onChange={onChange}/>
          <Label className="">주민번호(앞자리6글자)</Label>
        </Form>
        <Form className="form-floating mb-3">
          <Input className="form-control fw-bold border" name="userPassword" onChange={onChange}/>
          <Label className="">카드비밀번호(4자리)</Label>
        </Form>
        <Button color={"primary"}>
          제 출
        </Button>
      </Card>
      <br/><br/><br/>

      <Card body className={`${styles?.kioskLog}`}>
        <CardHeader tag="h1">
          주문 정보 관련 리스트 출력
        </CardHeader>
      </Card>

    </div>
  )
}

export default Index