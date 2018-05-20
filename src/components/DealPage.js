import React from 'react';
import { connect } from 'react-redux';

const DealPage = (props) => (
  <div>
    <h3>{props.restaurant.tagline}</h3>
  </div>
);

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === props.match.params.id)
});

export default connect(mapStateToProps)(DealPage);