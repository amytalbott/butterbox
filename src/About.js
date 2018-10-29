import React from 'react';
import Header from './Header';

import about from './img/about.jpeg';

// Information about the ButterBox team

const About = () => {
  return (
    <div>
        <h2 className="aboutHeader text-center">About us</h2>
        <div className="aboutContainer">
          {/* This image needs to be resized */}
          <img className="aboutPhoto" src={about} alt="the ButterBox team"/>
          <p></p>
        </div>
    </div>
  );
}


export default About;
