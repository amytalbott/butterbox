import React from 'react';
// import Counter from './Counter.js';
import {Col} from 'react-bootstrap';


// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  let index = props.index;
  return (

        <Col xs={12} md={6} lg={3}>
          <div className="availableItems text-center">
            <img className="productPhoto" src={props.photo} alt="bread with butter on it" />
            <div className="">
              { props.name }: ${props.price}
            </div>
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
            {/* <Counter */}
            {/* //   currentAmount={props.currentAmount}
            //   index={props.index}
            //   changeAmount={props.changeAmount}
            // /> */}
          </div>
        </Col>

  );
}

export default Item;
