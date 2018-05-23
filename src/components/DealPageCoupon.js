import React from 'react';

const DealPageCoupon = ({ restaurant }) => (
  <div>
    <img src={restaurant.thumb} />
    <h3>Save</h3>
    <h1>{`${restaurant.discount}%`}</h1>
    <p>on total bill when paying with a cryptocurrency.</p>
  </div>
);

export default DealPageCoupon;