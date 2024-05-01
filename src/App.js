import logo from './logo.svg';
import './App.css';
import React from 'react';
import NoName from './NoName';

function App() {

  const $h2 = <h2>반가워요~~!</h2>; // 바자 스크립트 문법임. 생긴게 html이랑 비슷할 뿐

  return (
    <>
      <NoName />
      <div className='App'>
        <h1>메롱메롱~~!!!</h1>
        {$h2}
      </div>
      <div className='noname'>
        <input type='text' />
        <p>
          오늘은 5월1일 수요일 입니디. <br />
          오후 3시 30분 입니다.
        </p>
      </div>
    </>
  );
}

export default App;
