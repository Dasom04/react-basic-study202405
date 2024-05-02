import React from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      <ExpenseItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />

      <ExpenseItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        price={items[2].price}
        date={items[2].date}
      />
    </div>
  );
};

export default Expenses;
