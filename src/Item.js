import React from 'react';
import {Col} from 'react-bootstrap';

// import component
import Counter from './Counter.js';

// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  return (

        <Col xs={12} md={6} lg={3}>
          <div className="availableItems text-center">
            <img className="productPhoto" src={props.photo} alt="bread with butter on it" />
            <div className="">
              { props.name }: ${props.price}
            </div>
            <Counter
              currentAmount={props.currentAmount}
              index={props.index}
              changeAmount={props.changeAmount}
            />
          </div>
        </Col>

  );
}

export default Item;
