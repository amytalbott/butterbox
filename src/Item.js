import React from 'react';
import {Col} from 'react-bootstrap';

// import component
import Counter from './Counter.js';
import ItemDescription from './ItemDescription.js';

// Displays each item, along with price, current amount in cart, and add/remove
// buttons

const Item = (props) => {
  return (

        <Col xs={12} md={6} lg={6}>
            <div className="availableItems text-center">
            <div className="item-heading">
              <span>{ props.name }: ${props.price}</span>
            </div>
            <img className="productPhoto" src={props.photo} alt="bread with butter on it" />

            <ItemDescription
            description={props.description}
            />
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
