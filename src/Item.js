import React from 'react';
import Counter from './Counter.js';

// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  return (
    <div className="availableItems">
      <span>
        { props.name }: ${props.price}
      </span>
      <Counter
        currentAmount={props.currentAmount}
        index={props.index}
        changeAmount={props.changeAmount}
        // changeAmount={props.changeAmount}
      />
    </div>
  );
}

export default Item;
