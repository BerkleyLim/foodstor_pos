// import React from 'react'
import styles from "./index.module.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputUserInfo from './UserInfo/InputUserInfo';
import Bank from './bank/Bank';
import MenuIndex from './menu/MenuIndex';
import PosFood from './posfood/PosFood';
import LogInfo from "./loginfo/LogInfo";

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

        {/* 로그창 띄우기 */}
        <LogInfo />
      </div>
    </Router>
  )
}

export default Index