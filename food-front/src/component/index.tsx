// import React from 'react'
import styles from "./index.module.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputUserInfo from './UserInfo/InputUserInfo';
import Bank from './bank/Bank';
import MenuIndex from './menu/MenuIndex';
import PosFood from './posfood/PosFood';
import LogInfo from "./loginfo/LogInfo";
// import { useQuery } from 'react-query';

const Index = (): string | any => {

  // const { isLoading, isError, data} = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => 
  //   fetch('http://localhost:8080/api/food/test').then(
  //     (res) => res.json(),
  //   ),
  // });

  // if (isLoading) return 'Loading...';

  // if (isError) return 'An error has occurred : ';

  // console.log(data)
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

        {/* 로그창 띄우기 */}
        <LogInfo />
      </div>
    </Router>
  )
}

export default Index