import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div>
    <h2>CryptoDeals</h2>
    <div>
      <h4>Company</h4>
      <ul>
        <Link to="/about-cryptodeals"><li>About Us</li></Link>
        <li>Partnership</li>
      </ul> 
    </div>  
    <div>
      <h4>Help & Support</h4>
      <ul>
        <li>Contact Us</li>
        <Link to="/terms-and-conditions" target="_blank"><li>Terms & Conditions</li></Link>
        <Link to='/privacy-policy' target="_blank"><li>Privacy Policy</li></Link>
      </ul> 
    </div>
    <div>
      <h4>Follow Us</h4>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul> 
    </div>
    <div>
      <h3>Stay In Touch</h3>
      <p>Get the latest updates and news.</p>
      <form>
        <input placeholder="email" />
        <button>Submit</button>
      </form>  
    </div>
  </div>
);

export default Footer;