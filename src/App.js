import React, {Component} from 'react';
// import './App.css';
import Header from './Header';
import Item from './Item';

// Passes down changes in the state of each item

class App extends React.Component {
  state = {
    items: [
      {
        photo: "./img/butter-placeholder.jpg",
        name: "One-year subscription",
        price: 80,
        currentAmount: 0,
        index: 1
      },
      {
        photo: "./img/butter-placeholder.jpg",
        name: "Six-month subscription",
        price: 40,
        currentAmount: 0,
        index: 2
      },
      {
        photo: "./img/butter-placeholder.jpg",
        name: "Butter sampler",
        price: 30,
        currentAmount: 0,
        index: 3
      },
      {
        photo: "./img/butter-placeholder.jpg",
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

  // renders all the components of the app

  render() {
    return (
      <div>
        {/* These are JSX tags */}
        <Header
          items={this.state.items}
        />
        {/* Available items list */}
        {this.state.items.map( (item, index) =>
          <Item
            photo={item.photo}
            name={item.name}
            price={item.price}
            index={index}
            changeAmount={this.handleItemChange}
            currentAmount={item.currentAmount}
          />
        )
        }

      </div>
    );
  }

}



export default App;
