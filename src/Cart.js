import React from 'react';
import App from './App';


const Cart = (props) => {
  const inCart = props.items.reduce((total, item) => {
    return total + item.currentAmount;
  }, 0);

  const money = props.items.reduce((total, item) => {
    return total + item.currentAmount * item.price;
  }, 0);

  return(
    <div className="cart">
      <div className="totalItems">
        <span>Items in cart: </span>
        <span>{inCart}</span>
      </div>
      <div className="money">
        <span>Total: $</span>
        <span>{money}</span>
      </div>
    </div>

  );
}

export default Cart;
