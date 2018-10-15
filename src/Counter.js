import React from 'react';

// This displays the amount of each item that's in the cart, and the add and remove
// buttons. The remove button doesn't display until an item has been added to the
// cart.

const Counter = props => {
  let index = props.index;

  return (
    <div className="counter">
      <span className="counter-score">Amount in cart: {props.currentAmount}</span>
      <div>
        <button
          className="counter-action addButton"
          onClick={() => props.changeAmount(index, 1)}
        >
          Add
        </button>

        {props.currentAmount > 0 ? (
          <button
            className="counter-action removeButton"
            onClick={() => props.changeAmount(index, -1)}
          >
            Remove
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Counter;
