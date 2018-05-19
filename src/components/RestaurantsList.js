import React from 'react';
import { connect } from 'react-redux';

const RestaurantsList = (props) => (
  <div>
    <h3>Restaurants list goes here</h3>
    <p>{props.restaurants.length}</p>
  </div>
);


const mapStateToProps = (state) => ({
  restaurants: state.restaurants
});

export default connect(mapStateToProps)(RestaurantsList);