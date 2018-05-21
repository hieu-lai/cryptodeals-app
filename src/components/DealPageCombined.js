import React from 'react';
import DealPageHeader from './DealPageHeader';
import DealPageOverview from './DealPageOverview';

const DealPageCombined = (props) => (
  <div>
    <DealPageHeader tagline={props.restaurant.tagline}/>
    {console.log(props.restaurant)}
    <DealPageOverview zomato_id={props.restaurant.zomato_id} />
  </div>  
);

export default DealPageCombined;