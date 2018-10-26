import React from 'react';
import {NavLink} from 'react-router-dom';
import { Jumbotron,
 } from 'react-bootstrap';

// Import components:
import Cart from './Cart';


// Stateless functional component displaying the header, navbar, and intro text

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="header">
        <h1 className="siteTitle text-center">
          <NavLink to="/">ButterBox</NavLink>
        </h1>
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
              <Cart items={props.items} className="shoppingCart" />
            </div>
          </Jumbotron>

        </div>
      );
    }

export default Header;
