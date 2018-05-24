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
      <div key={uuid()}>
        <img src={coin.logo} />
        <p>{coin.coin}</p>
      </div>
    )
  });

  return (
    <div className="item-container">
      <Link className="list-item--link" to={`/deal/${restaurant.id}`}>
        <img className="list-item__image" src={restaurant.thumb} />
        <h4>{restaurant.tagline}</h4>
        <h5>{restaurant.name}</h5>
        <p>{restaurant.location.suburb.replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}</p>
        <p>Save {restaurant.discount}% on total bill</p> 
        <p>Accepts:</p> 
        {image}
        {otherCoins.length > 0 ? <p>+ {otherCoins.length} more </p> : ''}
      </Link>
    </div> 
  );
};

export default RestaurantListItem;