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
              <ul className="main-nav" id="myTopnav">
                {/* Menu icon that appears on smaller screens */}
                <li>
                  <a href="javascript:void(0);" className="icon">
                     <i className="fa fa-bars"></i>
                   </a>
                </li>
                {/* Menu options that appear on larger screens */}
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
              {/* Items in cart and Total. Appears on the top left */}
              <Cart items={props.items} className="shoppingCart" />
            </div>
          </Jumbotron>

        </div>
      );
    }

export default Header;
