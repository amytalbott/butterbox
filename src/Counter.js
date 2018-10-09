import React from 'react';

// Hide Remove buttons on page load
// Make Remove buttons appear once currentAmout >= 1
// Set the minimum value of currentAmount to 0

window.onload = function() {
  document.getElementById('remove-button').style.display = 'none';
};


const Counter = (props) => {

    let index = props.index;

    return (
      <div className="counter">
        <button className="counter-action add" onClick={() => props.changeAmount(index, 1)}> Add </button>
        <span className="counter-score">{ props.currentAmount }</span>
        <button id="remove-button" className="counter-action remove" onClick={() => props.changeAmount(index, -1)}> Remove </button>
      </div>
    );
  }


export default Counter;
