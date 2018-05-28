/*
 * Combines all the components for a deal page.
*/

import React from 'react';
import { connect } from 'react-redux';
import DealPageHeader from './DealPageHeader';
import DealPageOverview from './DealPageOverview';
import DealPageAcceptedCoins from './DealPageAcceptedCoins';
import DealPageCoupon from './DealPageCoupon';

const DealPage = (props) => (
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

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === props.match.params.id),
  coins: state.coins
});

export default connect(mapStateToProps)(DealPage);