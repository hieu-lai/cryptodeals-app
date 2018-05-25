import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import uuid from 'uuid';

const RestaurantListItem = ({ restaurant, coins }) => {
  const preferCoins = [];
  const otherCoins = [];
  for (let key in restaurant.cryptocurrencies) {
    if (restaurant.cryptocurrencies[key] === 1) {
      preferCoins.push(key);
    } else {
      otherCoins.push(key);
    }
  };
  const acceptedCoins = coins.filter((coin) => preferCoins.includes(coin.coin));
  let image = acceptedCoins.map((coin) => {
    return (
      <div className="list-item__coinCombo" key={uuid()}>
        <img className="list-item__coinLogo" src={coin.logo} />
        <p className="list-item__coinName">{coin.coin}</p>
      </div>
    )
  });

  return (
    <div className="item-container">
      <Link className="list-item--link" to={`/deal/${restaurant.id}`}>
        <img className="list-item__image" src={restaurant.thumb} /> 
        <div className="list-item-container__info">
          <h4 className="tagline">{restaurant.tagline}</h4>
          <h5 className="company">{restaurant.name}</h5>
          <p className="suburb">{restaurant.location.suburb.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}</p>
        </div> 
        <div className="list-item__details">
          <div className="list-item__coins">
            <h4>Accepts:</h4> 
            {image}
            {otherCoins.length > 0 ? <h4 className="list-item__otherCoins">+ {otherCoins.length} more </h4> : ''}
          </div>
          <div className="list-item__savings">
            <p className="list-item__savingsPrefix">Save</p>
            <p className="list-item__savingsDiscount">{restaurant.discount}%</p>
            <p className="list-item__savingsSuffix">on total bill</p>
          </div>  
        </div>  
      </Link>
    </div> 
  );
};

export default RestaurantListItem;