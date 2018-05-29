/*
 * Renders the footer of each page. Contains links to diff pages and outside 
 * links to social media.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import FooterSubscription from './FooterSubscription';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';

const Footer = () => (
  <div>
    <div className="footer">
      <div className="content-container">
        <h2 className="footer__title">CryptoDeals</h2>
        <div className="footer-container">
          <div className="footer-container__left">
            <div>
              <h4>Company</h4>
              <ul className="footer-ul">
                <Link className="footer--link" to="/about-cryptodeals"><li>About Us</li></Link>
                <Link className="footer--link" to="/partner-up"><li>Partnership</li></Link>
              </ul> 
            </div>  
            <div>
              <h4>Help & Support</h4> 
              <ul>
                <li>Contact Us</li>
                <Link className="footer--link" to="/terms-and-conditions" target="_blank"><li>Terms & Conditions</li></Link>
                <Link className="footer--link" to='/privacy-policy' target="_blank"><li>Privacy Policy</li></Link>
              </ul> 
            </div>
            <div className="footer-container__followUs">
              <h4>Follow Us</h4>
              <ul>
                <li>
                  <a className="footer--link" href="http://www.facebook.com" target="_blank">
                    <FacebookIcon 
                      size={23}
                    /> Facebook
                  </a>
                </li>
                <li>
                  <a className="footer--link" href="http://www.twitter.com" target="_blank">
                    <TwitterIcon 
                      size={23}
                    /> Twitter
                  </a>  
                </li>
              </ul> 
            </div>
          </div>  
        
          <div className="footer-container__right">
            <FooterSubscription />            
          </div>  
        </div>  
      </div>  
    </div>
    <div className="footer-container__bottom">
      <img className="footer__icon" src="/images/icon_bottom.png" />
      <p className="footer__signage">© CryptoDeals 2018, All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;