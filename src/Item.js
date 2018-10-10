import React from 'react';
import Counter from './Counter.js';


// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  return (
    <div className="availableItems">
      <img src={props.photo} alt="bread with butter on it" />
      <div>
        { props.name }: ${props.price}
      </div>
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
