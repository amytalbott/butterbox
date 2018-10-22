import React, {Component} from 'react';
import Item from './Item';

import butterPlaceholder from './butterPlaceholder.jpg';
import { Grid,
  Row,
 } from 'react-bootstrap';


 class Home extends React.Component {
   state = {
     items: [
       {
         photo: butterPlaceholder,
         name: "One-year subscription",
         price: 80,
         currentAmount: 0,
         index: 1
       },
       {
         photo: butterPlaceholder,
         name: "Six-month subscription",
         price: 40,
         currentAmount: 0,
         index: 2
       },
       {
         photo: butterPlaceholder,
         name: "Butter sampler",
         price: 30,
         currentAmount: 0,
         index: 3
       },
       {
         photo: butterPlaceholder,
         name: "Mystery flavor",
         price: 10,
         currentAmount: 0,
         index: 4
       },
     ]
   }

   handleItemChange = (index, delta) => {
     this.setState( prevState => ({
       currentAmount: prevState.items[index].currentAmount += delta
     }));
   }
   render() {
     return (
       <div className="homeContainer">
         <p className="introParagraph text-center"> Subscribe to our butter of the month club, or try one of our
           a la carte butter offerings.</p>
         <Grid>
           <Row className="show-grid">
             {/* Available items list */}
             {this.state.items.map( (item, index) =>
               <Item className="itemForSale"
                 photo={item.photo}
                 name={item.name}
                 price={item.price}
                 index={index}
                 changeAmount={this.handleItemChange}
                 currentAmount={item.currentAmount}
               />
             )
           }
           </Row>
         </Grid>
       </div>
     )
   }
 }

export default Home;
