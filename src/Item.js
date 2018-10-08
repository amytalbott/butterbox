import React from 'react';
import Counter from './Counter.js';


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
      />
    </div>
  );
}

export default Item;
