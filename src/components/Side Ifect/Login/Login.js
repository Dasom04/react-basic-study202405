import React, { useEffect, useReducer, useState } from 'react';
import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import { type } from '@testing-library/user-event/dist/type';

// 리듀서 함수 선언
/*
  이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
  컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.

  param1 - state: 변경 전의 상태값
  param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
  return: 관리할 상태값들을 반환
*/

const emailReducer = (state, action) => {
  console.log('email reducer called!!');
  console.log('state: ', state);
  console.log('action: ', action);

  // dispatch 함수가 전달한 액션 객체의 타입에 딸 변경할 상태 값을 반환.
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }
};

const Login = ({ onLogin }) => {
  // email reducer 사용하기
  /*
    param1 - reducer function: 위에서 만든 리듀서 함수
    param2 - initial state: 초기 상태값
    return1 - 이메일 관련 상태변수 (상태값)
    return2 - dispatch함수: 상태를 변경할 수 있는 함수 (변경을 위해 호출하는 함수)
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  // 패스워드 입력값을 저장
  const [enteredPassword, setEnteredPassword] = useState('');
  // 패스워드 입력이 정상적인지 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // 기존의 email 상태 변수 제거함.
  // 상태값이 필요하다면, reducer에서 제공되는 상태값을 활용.
  // emailState에서 isValid 프로퍼티를 디스트럭처링함 (프로퍼티로 바로 사용 x)
  const { isValid: emailIsValid } = emailState;

  // 입력란 (이메일, 비밀번호)을 모두 체크하며 from의 버튼 disavled를 해재하는
  // 상태변수 fromIsVolid의 사이드 이팩트 차리하는 영역
  useEffect(() => {
    // fromIsVolid의 유효성 검증을 일부러 1초 뒤에 실행 하도록 setTimeout을 사용.
    // 1초 이내에 새로운 입력값이 들어옴 -> 상태 변경 -> 재 렌더링이 진행되면서 useEffect가 또 호출 됨.

    const timer = setTimeout(() => {
      console.log('useEffect called on Login.js!');
      setFormIsValid(emailIsValid && enteredPassword.trim().length > 6);
    }, 1000);

    // cleanup 함수 - 컴포넌트가 업데이트 되거나 없어지기 직전에 실행.
    // 사용자가 1초 이내에 추가 입력 -> 상태 변경 -> 위에 예약한 timer를 취소하자.
    return () => {
      console.log('clean-up!');
      clearTimeout(timer);
    };

    // 의존성 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 때 마다 useEffect가 재실행됨.
  }, [emailIsValid, enteredPassword]);

  const emailChangeHandler = (e) => {
    // reducer의 상태 변경은 dispatch 함수를 통해서 처리
    // dispatch 함수의 매개값 객체의 key는 정해진 것이 아닌, reducer함수에서 구분하기 위해 붙여주는 이름.
    // 프로퍼티의 key와 value는 자유롭게 줄 수 있습니다. (정해진게 아님!)
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value,
    });
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE',
    });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${!emailIsValid ? styles.invalid : ''}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;