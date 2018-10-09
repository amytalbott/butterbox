import React from 'react';
import Cart from './Cart';

import { Jumbotron,
  Navbar,
  NavItem,
 } from 'react-bootstrap';


// Stateless functional component displaying the header, navbar, and intro text

const Header = (props) => {
  return (
    <div>
      <Jumbotron className="header text-center">
        <h1>ButterBox</h1>
        <p>
          Butter of the Month Club
        </p>
        <Navbar>
          <NavItem>
            About Us
          </NavItem>
          <NavItem>
            ButterBlog
          </NavItem>
          <NavItem>
            FAQ
          </NavItem>
          <NavItem>
            Contact
          </NavItem>
          <NavItem>
            <Cart items={props.items}/>
          </NavItem>
        </Navbar>
      </Jumbotron>
      <p className="text-center">Sign up and receive a surprising, seasonally-flavored pound of butter each month.</p>

      <p className="text-center">Get one for yourself, or buy a gift membership for a friend.</p>
    </div>
  );
}

export default Header;
