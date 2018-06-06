/*
 * Renders all the links on ContactUs page.
*/

import React from 'react';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';

const ContactUsLinks = () => (
  <div className="contactus-container-split contactus-container--center">
    <h3 className="contactus__subtitle">Prefer other methods?</h3>
    <p className="contactus__subtitle-below">We have those too.</p>
    <h4 className="contactus-email__title">Email</h4>
    <a href="mailto:hello@cryptodeals.com.au">hello@cryptodeals.com.au</a>
    <h4 className="contactus-email__title">Social</h4>
    <div className="contactus-container-social">
      <a className="footer--link" href="http://www.facebook.com" target="_blank">
        <FacebookIcon size={30} color="#3b5998" />
          <span>Facebook</span>
      </a>
    </div>
    <div className="contactus-container-social">  
      <a className="footer--link" href="http://www.twitter.com" target="_blank">
        <TwitterIcon size={30} color="#00aced" />
          <span>Twitter</span>
      </a>   
    </div>    
  </div>
);

export default ContactUsLinks;