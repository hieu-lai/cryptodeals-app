import React from 'react';
import DealPageHeader from './DealPageHeader';
import DealPageOverview from './DealPageOverview';
import DealPageAcceptedCoins from './DealPageAcceptedCoins';

const DealPageCombined = (props) => (
  <div>
    <DealPageHeader tagline={props.restaurant.tagline}/>
    <DealPageAcceptedCoins coins={props.restaurant.cryptocurrencies} />
    <DealPageOverview zomato_id={props.restaurant.zomato_id} />
  </div>  
);

export default DealPageCombined;