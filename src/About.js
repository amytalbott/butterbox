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
            <p>Lorem ipsum dolor amet mixtape fashion axe tote bag readymade blue
              bottle ethical DIY butcher. XOXO tilde quinoa mustache yr hammock echo
              park chillwave actually brunch humblebrag. Venmo four loko lyft art
              party quinoa, iPhone tilde taxidermy woke meggings pickled. VHS ethical
              austin cronut art party. Williamsburg small batch single-origin coffee
              sriracha four dollar toast.</p>

            <p>Single-origin coffee gochujang listicle small batch viral la croix
              distillery, messenger bag bitters microdosing synth pitchfork. Tumblr
              blog farm-to-table, snackwave banh mi occupy vaporware keytar portland
              wolf brunch narwhal. Vape DIY next level trust fund 3 wolf moon
              biodiesel food truck wayfarers af knausgaard echo park gastropub brunch
              man bun. Yuccie organic woke pop-up.</p>

              <p>Lyft meditation meh enamel pin distillery swag la croix jianbing
                poutine dreamcatcher tumblr biodiesel activated charcoal fam. Migas
                ethical street art, intelligentsia letterpress iceland poutine fanny
                pack four loko chia banh mi 3 wolf moon mumblecore aesthetic. Cray
                banh mi live-edge readymade truffaut paleo. Viral chillwave brooklyn,
                migas trust fund heirloom wayfarers before they sold out pickled.
                3 wolf moon pug thundercats distillery VHS vinyl forage mixtape wayfarers.</p>
            </div>
        </div>
    </div>
  );
}


export default About;
