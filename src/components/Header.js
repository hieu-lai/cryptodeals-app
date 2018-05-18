import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>CryptoDeals</h1>
        </Link>        
        <input type="text" placeholder="Find deals" />
        <select>
          <option>Melbourne</option>
          <option>Sydney</option>
          <option>Brisbane</option>
        </select>  
      </div>
    </div>
  </header>
);


export default Header;
