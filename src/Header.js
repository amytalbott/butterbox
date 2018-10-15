import React from 'react';
import Cart from './Cart';

import { Jumbotron,
  Nav,
  Navbar,
  NavItem,
  MenuItem
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
          {/* I want to figure out how to make this part responsive.
            It should collapse and a toggle button should appear. */}
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
            {/* This part doesn't collapse with the rest of the menu.
            It stays off to the right. */}
          <Nav pullRight>
            <NavItem>
              <Cart items={props.items}/>
            </NavItem>
          </Nav>
        </Navbar>
        {/* <Navbar>
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
        </Navbar> */}
      </Jumbotron>
      <p className="introParagraph text-center">Subscribe and receive a surprising, seasonally-flavored pound of butter each month.
      Get one for yourself, or buy a gift subscription for a friend.</p>
    </div>
  );
}

export default Header;
