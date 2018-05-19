import React from 'react';
import { connect } from 'react-redux';
import RestaurantListItem from './RestaurantListItem';

const RestaurantsList = (props) => (
  <div>
    <h3>Restaurants list goes here</h3>
    {
      props.restaurants.map((restaurant) =>
        <RestaurantListItem key={restaurant.name} {...restaurant} />)
    }
  </div>
);


const mapStateToProps = (state) => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(RestaurantsList);