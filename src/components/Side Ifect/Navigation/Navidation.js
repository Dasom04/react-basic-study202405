import React, { useContext } from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navidation = () => {
  // AuthContext에서 제공되는 전역 객체를 디스럭처링으로 분해.
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <button onClick={onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navidation;
