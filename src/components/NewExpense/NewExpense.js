import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExspenseToggle] = useState(false);

  const startInsertModeHandler = () => setExspenseToggle(true);
  const stopInsertModeHandler = () => setExspenseToggle(false);

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (expenseToggle) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInsertModeHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
