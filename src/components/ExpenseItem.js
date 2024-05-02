import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';
const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <Card className="circle">
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
