import React, {Component} from 'react';
// import './App.css';
import Header from './Header';
import Item from './Item';

class App extends React.Component {
  state = {
    items: [
      {
        name: "One-year subscription",
        price: 80,
        currentAmount: 0,
        index: 1
      },
      {
        name: "Six-month subscription",
        price: 40,
        currentAmount: 0,
        index: 2
      },
      {
        name: "Butter sampler",
        price: 30,
        currentAmount: 0,
        index: 3
      },
      {
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
      <div>
        {/* These are JSX tags */}
        <Header
          items={this.state.items}
        />
        {/* Available items list */}
        {this.state.items.map( (item, index) =>
          <Item
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

// Passes each item state down to TotalItems and TotalMoney


export default App;
