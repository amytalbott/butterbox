import React from 'react';

// This displays the amount of each item that's in the cart, and the add and remove
// buttons. The remove button doesn't display until an item has been added to the
// cart.

const Counter = props => {
  let index = props.index;

  return (
    <div className="counter">
      <span className="counter-score">Amount in cart: {props.currentAmount}</span>
      <button
        className="counter-action add"
        onClick={() => props.changeAmount(index, 1)}
      >
        Add
      </button>

      {props.currentAmount > 0 ? (
        <button
          id="remove-button"
          className="counter-action remove"
          onClick={() => props.changeAmount(index, -1)}
        >
          Remove
        </button>
      ) : null}
    </div>
  );
};

export default Counter;
