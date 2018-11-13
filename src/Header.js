import React from 'react';
import {NavLink} from 'react-router-dom';


// Import components:
import Cart from './Cart';


// Displays the header, navbar, and intro text

const Header = (props) => {
  return (
    <div className="header">
        <h1 className="siteTitle text-center">
          <NavLink to="/">ButterBox</NavLink>
        </h1>
        <div className="header-nav">
          <ul className="main-nav" id="myTopnav">
              {/* Menu icon that appears on smaller screens */}
              <li>
                <a href="javascript:void(0);" className="icon">
                   <button className="fa fa-bars" onClick=""></button>
                 </a>
              </li>
              {/* Menu options that appear on larger screens */}
              <li>
                <NavLink to="/butterblog" className="navbar-link header-font">ButterBlog</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="navbar-link header-font">About us</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="navbar-link header-font">Contact</NavLink>
              </li>
          </ul>
            {/* Items in cart and Total. Appears on the top left */}
          <Cart items={props.items} className="shoppingCart" />
        </div>
        </div>
      );
    }

export default Header;
