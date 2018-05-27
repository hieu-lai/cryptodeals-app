import React from 'react';
import DealPageHeader from './DealPageHeader';
import DealPageOverview from './DealPageOverview';
import DealPageAcceptedCoins from './DealPageAcceptedCoins';
import DealPageCoupon from './DealPageCoupon';

const DealPageCombined = (props) => (
  <div>
    <DealPageHeader tagline={props.restaurant.tagline}/>
    <DealPageCoupon restaurant={props.restaurant} />
    <DealPageAcceptedCoins 
      dealCoins={props.restaurant.cryptocurrencies} 
      coins={props.coins}
    />
    <DealPageOverview 
      phone={props.restaurant.phone}
      zomato_id={props.restaurant.zomato_id} 
    />
  </div>  
);

export default DealPageCombined;