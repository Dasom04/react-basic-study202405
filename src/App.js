import './App.css';
import React from 'react';
import AuthContext from './components/store/auth-context';
import Header from './components/Food/Layout/Header';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Header />
    </>
  );
};

export default App;
