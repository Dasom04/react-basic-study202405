import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';

const AddUsers = () => {
  const userSubmitHandler = (e) => {};

  const [userValue, setUserValue] = useState({
    userName: '',
    age: '',
  });

  const userNameChangehandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        userName: e.target.value,
      };
    });
  };

  const ageChangehandler = (e) => {
    setUserValue((prevUserValue) => {
      return {
        ...prevUserValue,
        age: e.target.value,
      };
    });
  };

  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (userValue.userName.trim() === '' || userValue.age.trim() === '') {
      alert('입력값에 문제가 있다!');
      return;
    }

    if (+userValue.age < 1) return;

    console.log(userValue);

    setUserValue({
      userName: '',
      age: '',
    });
  };

  return (
    <Card className={styles.input}>
      <form className={styles.input} onSubmit={userSubmitHandler}>
        <label htmlFor="username">이름</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangehandler}
          value={userValue.userName}
        />
        <label htmlFor="age">나이</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={userValue.age}
        />
        <Button type="submit">가입하기</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
