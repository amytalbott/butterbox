import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
// import Item from './Item';
import Home from './Home';
import ButterBlog from './ButterBlog';
import About from './About';
import Contact from './Contact';


import butterPlaceholder from './butterPlaceholder.jpg';
// import { Grid,
//   Row,
//  } from 'react-bootstrap';


// Passes down changes in the state of each item

class App extends React.Component {
  // assigns props to all the items that appear in Home.js
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
  // renders all the components of the app

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header
            items={this.state.items}
          />

          <div className="routeContainer">
            <Route exact path="/" render={(props) => <Home
              {...props}
              items={this.state.items}
              handleItemChange={this.handleItemChange} />}
            />
            <Route path="/butterblog" component={ButterBlog} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>

        </div>
      </BrowserRouter>
    );
  }

}



export default App;
