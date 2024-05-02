import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  //let itemTitle = title;

  // 값이 변경되어 화면에 반영하는 값들은
  // useState 훅을 통해 상태변수로 관리 해야한다.
  // (훅: React에서 직접 코드 작성 없이 다양한 기능을 사용할 수 있게 도와주는 라이브러리)

  // useState(상태변수의 초기값) ->  배열을 리턴합니다.
  // 첫번째 요소는 관리할 상태 값
  // 두번째 요소는 상태값을 변경하는 setter 함수가 리턴.
  const [itemTitle, setItemTitle] = useState(title); // 초기값 넣기 '' 빈 문자열 주는것도 가능, 숫자 주는것 가능

  const clickHandler = (e) => {
    // state로 관리하는 변수는 반드시 setter로만 변경해야 합니다.

    setItemTitle((snapshot) => {
      console.log('snapshot: ', snapshot);
      // setter함수의 매개값으로 콜백함수를 선언. -> 콜백함수의 매개값으로 현재 상태변수 값이 전달.
      // return값이 변경될 상태값으로 지정.
      // return값이 snapshot과 다를경우에 화면이 리렌더링, 같을 경우 리렌더링 하지 않음.
      return '메롱메롱~';
    });

    // state로 관리하는 변수는 반드시 setter로만 변경해야 합니다.
    setItemTitle('메롱메롱~');
  };

  return (
    <Card className="circle">
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>
      <button id="btn1" onClick={clickHandler}>
        수정
      </button>
      <button id="btn2" onClick={(e) => console.log('삭제버튼 클리됨!')}>
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
