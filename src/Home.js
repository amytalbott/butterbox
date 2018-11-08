import React from 'react';
import { Grid,
  Row,
 } from 'react-bootstrap';

//import components
import Item from './Item';


// displays all the items for sale

  const Home = (props) => {
    return (
      <div className="homeContainer">
        <h3 className="introParagraph text-center header-font">Subscribe to our butter of the month club, or try one of our
          a la carte butter offerings.</h3>
        <Grid>
          <Row className="show-grid">
            {/* Available items list */}
            {props.items.map( (item, index) =>
              <Item className="itemForSale"
                photo={item.photo}
                name={item.name}
                price={item.price}
                index={index}
                description={item.description}
                changeAmount={props.handleItemChange}
                currentAmount={item.currentAmount}
              />
            )
          }
          </Row>
        </Grid>
      </div>
    )
  }

export default Home;
