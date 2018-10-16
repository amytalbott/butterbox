import React from 'react';
import { Jumbotron,
 } from 'react-bootstrap';

 import {
  BrowserRouter as Router, Route, NavLink
} from 'react-router-dom';

// Import comonents:
import Cart from './Cart';
import ButterBlog from './NavComponents/ButterBlog';
import About from './NavComponents/About';
import Contact from './NavComponents/Contact';




// Stateless functional component displaying the header, navbar, and intro text

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="header">
        <h1 className="siteTitle text-center">ButterBox</h1>
        <Router>
            <div className="header-nav">
             <ul className="main-nav">
                <li>
                  <NavLink to="/butterblog">ButterBlog</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>

                {/* <Route path="/" component={App} /> */}
                <Route path="/butterblog" component={ButterBlog} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                {/* <Route component={NotFound}/> */}
                <Cart items={props.items} className="shoppingCart"/>
            </div>
        </Router>


      </Jumbotron>

    </div>
  );
}

export default Header;
