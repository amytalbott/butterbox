import React from 'react';
import {NavLink} from 'react-router-dom';


// Import components:
import Cart from './Cart';
import Navigation from './Navigation';


// Displays the header, navbar, and intro text

const Header = (props) => {


  return (
    <div className="header">
        <h1 className="siteTitle text-center">
          <NavLink to="/">ButterBox</NavLink>
        </h1>
        <div className="header-nav">
          <Navigation className="main-nav"/>
          {/* Items in cart and Total. Appears on the top left */}
          <Cart items={props.items} className="shoppingCart" />
        </div>
      </div>
      );
    }

export default Header;
