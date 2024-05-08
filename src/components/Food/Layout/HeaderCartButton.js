import React, { useContext } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  const { items } = useContext;

  const numberOfCart = items.reduce((accu, item) => accu + item.amount, 0);

  return (
    <button className={button} onClick={onShow}>
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{items.length}</span>
    </button>
  );
};

export default HeaderCartButton;
