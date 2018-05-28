/*
 * Pass data through to the RestaurantListItem component. Also calculate
 * screen width to create better responsive design.
*/

import React from 'react';
import { connect } from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import selectRestaurants from '../selectors/restaurants';
import uuid from 'uuid';

const RestaurantsList = (props) => {
  // Calculates screen width and fills in the gaps.
  let fillTheGap = [];
  const fillTheGapFunc = () => {
    const numOfRest = props.restaurants.length;
    if (window.innerWidth >= 720 && window.innerWidth <= 1026 && numOfRest%2 !== 0) {
      fillTheGap = [<div key={uuid()} className="empty__div"></div>];
    } else if (window.innerWidth > 1026 && numOfRest%3-2 === 0) {
      fillTheGap = [<div key={uuid()} className="empty__div"></div>];
    } else if (window.innerWidth > 1026 && numOfRest%3-1 === 0) {
      fillTheGap = [<div key={uuid()} className="empty__div"></div>,<div key={uuid()} className="empty__div"></div>];
    }
    return fillTheGap;
  };  
  fillTheGapFunc();
  
  return (
    <div className="content-container">  
      <div className="list-content-container">
        {props.restaurants.length === 0 ? <p className="list__nomatch">Sorry, no matching deals found.</p> : ''}
        {
          props.restaurants.map((restaurant) =>
            <RestaurantListItem 
              key={restaurant.id} 
              restaurant={restaurant} 
              coins={props.coins}
            />
          )
        }
        {fillTheGap.map(div => div)}
      </div>
    </div>
  )  
       
};


const mapStateToProps = (state) => ({
  restaurants: selectRestaurants(state.restaurants, state.filters),
  coins: state.coins
});

export default connect(mapStateToProps)(RestaurantsList);