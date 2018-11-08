import React from 'react';
import { Button } from 'reactstrap';

// Displays the amount of each item that's in the cart, and the add and remove
// buttons. The remove button doesn't display until an item has been added to the
// cart.

const Counter = props => {
  let index = props.index;

  return (
    <div className="counter">
      <span className="counter-score item-amount">Amount in cart: {props.currentAmount}</span>
      <div>
        <Button
          className="counter-action addButton"
          onClick={() => props.changeAmount(index, 1)}
        >
          Add
        </Button>

        {props.currentAmount > 0 ? (
          <Button
            className="counter-action removeButton"
            onClick={() => props.changeAmount(index, -1)}
          >
            Remove
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Counter;
