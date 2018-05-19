import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const RestaurantListItem = ({ id, name, discount, cryptocurrencies, location, tagline }) => {
  const preferCoins = [];
  const otherCoins = [];
  for (let key in cryptocurrencies) {
    if (cryptocurrencies[key] === 1) {
      preferCoins.push(key);
    } else {
      otherCoins.push(key);
    }
  }
  
  return (
    <div>
      <Link to={`/deal/${id}`}>
        <h4>{tagline}</h4>
        <h5>{name}</h5>
        <p>{location.suburb.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}</p>
        <p>Save {discount}% on total bill</p> 
        <p>Accepts: {preferCoins.map(coin => coin)}</p> 
        {otherCoins.length > 0 ? <p>+ {otherCoins.length} more </p> : ''}
      </Link>
    </div>
  );
};

export default RestaurantListItem;