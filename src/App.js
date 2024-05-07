import './App.css';
import React, { useEffect, useState } from 'react';
import MainHeader from './components/Side Ifect/MainHeader/MainHeader';
import Login from './components/Side iFect/Login/Login';

const App = () => {
  console.log('App 컴포넌트 실행!');
  // 로그인 상태를 관리하는 변수
  const [isLoggedin, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링 될 떄 LocalStage를 확인해서
   // 현재 logon-page가 존재 하는지 검사
   console.log('로그인 검사 수행');

   // 기존에 로그인한 사람인지 확인하는 코드는
   // 리렌더링 될 때 마다 실행하면 안됨 ! (한번만 확인하면 됨.
   useEffect(() => {
    console.log('useEffect 실행 - 최초 단 한번만 실행 됨됨!');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if(storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
   }, []); 
   // 의존성 배열: useEffect가 실행 되어야 하는 트리거 변수.
   // 배열 안에 변수를 지정하면, 해당 변수의 값이 변할 떄 마다 useEffect가 실행됨.
   // 만약 배열을 비워놓으면, 렌더링 과정에서 단 한번만 실행이 된다.

  // 서버로 로그인을 요청하는 함수, (나중에는 fetch를 통한 백엔드와 연계가 필요.)
    const loginHandler = (email. password) => {
      // 로그인을 했당는 증거로 상태값 변경 밒 브라우저에 로그인 값을 1로 표현해서 저장.
      // (이전 프로젝트에서는 로그인 유지를 session을 사용함 -> 이제는 사용이 불가능. )
      localStorage.setItem('login-flag', '1'); // localStorage: 브라우저에서 제공하는 저장소
      setIsLoggedin(true);
    }

    const logoutHandler = () => {
      localStorage.removeItem('login-flag');
      getIsLoggedIn(false);
    }

    console.log('App 컴포넌트의 끝!');
  return (    
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;
