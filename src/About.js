import React from 'react';

// import image
import about from './img/about.jpeg';

// Information about the ButterBox team

const About = () => {
  return (
    <div>
        <h2 className="aboutHeader text-center header-font">About us</h2>
        <div className="aboutContainer">
          {/* This image needs to be resized */}
          <img className="aboutPhoto" src={about} alt="the ButterBox team"/>
          <div className="aboutText">
            <p>We are a group of butter enthusiasts who teamed up to share our hobby
            of creating small-batch flavored butters with subscribers.</p>

            <p>Our story began at a butter tasting party in a small kitchen, and grew
            from there.</p>

            <p>To keep our love of butter strong, we go on monthly butter sourcing trips,
            tasting the finest butters and flavorings that the world has to offer.</p>

            <p>We hope you'll enjoy our product, and become part of our exclusive butter
            community.</p>
            </div>
        </div>
    </div>
  );
}


export default About;
