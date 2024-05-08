import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CratModal from '../../UI/Modal/CratModal';
import CartContext from '../../store/Cart-context';
import CartItem from './CartItem';

const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '띠드버거',
    amount: 1,
    price: 12000,
  },
];

const Cart = ({ onClose }) => {
  const {
    'cart-itms': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  const { items, totalPrice } = useContext(CartContext);

  return (
    <CratModal onClose={onClose}>
      {/* 주문 내역 (카트안의 음식 내역)*/}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => {
          return (
            <CartItem key={cartItem.id} name={cartItem.name} cart={cartItem} />
          );
        })}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>
          닫기
        </button>
        <button className={button}>주문</button>
      </div>
    </CratModal>
  );
};

export default Cart;
