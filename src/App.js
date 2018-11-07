import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

// import components
import Header from './Header';
import Home from './Home';
import ButterBlog from './ButterBlog';
import About from './About';
import Contact from './Contact';

// import images
import year from './img/year.jpeg';
import six from './img/six.jpeg';
import sample from './img/sample.jpeg';
import mystery from './img/mystery.jpeg';

class App extends React.Component {
  // assigns props to all the items that appear in Home.js
  state = {
    items: [
      {
        photo: year,
        name: "One-year subscription",
        price: 80,
        currentAmount: 0,
        index: 1
      },
      {
        photo: six,
        name: "Six-month subscription",
        price: 40,
        currentAmount: 0,
        index: 2
      },
      {
        photo: sample,
        name: "Butter sampler",
        price: 30,
        currentAmount: 0,
        index: 3
      },
      {
        photo: mystery,
        name: "Mystery flavor",
        price: 10,
        currentAmount: 0,
        index: 4
      },
    ]
  }

// tracks when items are added or removed from the cart

  handleItemChange = (index, delta) => {
    this.setState( prevState => ({
      currentAmount: prevState.items[index].currentAmount += delta
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Header items={this.state.items} />

          <div className="routeContainer">
            <Route exact path="/" render={(props) =>
              <Home
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
