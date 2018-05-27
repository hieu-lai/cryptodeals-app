import React from 'react';

const DealPageCoupon = ({ restaurant }) => (
  <div className="content-container">
    <div className="dealpage-coupon-container">
      <div className="coupon-container-left">
        <img className="coupon__image" src={restaurant.thumb} />
      </div>
      <div className="coupon-container-right">
        <div className="coupon-right-top">
          <img className="coupon__resLogo" src={`/images/restaurant-logo/${restaurant.zomato_id}.png`} />
        </div>
        <div className="coupon-right-bottom">  
          <h3 className="coupon__preffix">Save</h3>
          <h1 className="coupon__discount">{`${restaurant.discount}%`}</h1>
          <p className="coupon__suffix">on total bill when paying with a cryptocurrency.</p>
        </div>  
      </div>  
    </div>  
  </div>
);

export default DealPageCoupon;