import React from 'react';
import { connect } from 'react-redux';
import RestaurantListItem from './RestaurantListItem';
import selectRestaurants from '../selectors/restaurants';

const RestaurantsList = (props) => (
  <div className="content-container">  
    <div className="list-content-container">
      {
        props.restaurants.map((restaurant) =>
          <RestaurantListItem 
            key={restaurant.id} 
            restaurant={restaurant} 
            coins={props.coins}
          />
        )
      }
    </div>
  </div>  
);


const mapStateToProps = (state) => ({
  restaurants: selectRestaurants(state.restaurants, state.filters),
  coins: state.coins
});

export default connect(mapStateToProps)(RestaurantsList);