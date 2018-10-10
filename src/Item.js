import React from 'react';
import Counter from './Counter.js';
import {Col} from 'react-bootstrap';


// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  return (

        <Col xs={12} md={6} lg={3}>
          <div className="availableItems">
            <img src={props.photo} alt="bread with butter on it" responsive />
            <div>
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
