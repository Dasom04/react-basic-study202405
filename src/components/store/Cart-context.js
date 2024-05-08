import React from 'react';

// 장바구니에 담기거나 제외되는 항목들을 전역 상태 관리하는 컨텍스트
// 컨텍스트에 들어가는 초기 객체는 뭘 담을 것인지에 대한 정의.
const CartContext = React.createContext({
  itmes: [],
  addItem: (item) => {},
  removeItme: (id) => {},
});

export default CartContext;
