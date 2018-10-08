import React from 'react';

const Counter = (props) => {

    let index = props.index;

    return (
      <div className="counter">
        <button className="counter-action add" onClick={() => props.changeAmount(index, 1)}> Add </button>
        <span className="counter-score">{ props.currentAmount }</span>
        <button className="counter-action remove" onClick={() => props.changeAmount(index, -1)}> Remove </button>
      </div>
    );
  }


export default Counter;
