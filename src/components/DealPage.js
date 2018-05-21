import React from 'react';
import { connect } from 'react-redux';
import LoadingPage from './LoadingPage';
import DealPageCombined from './DealPageCombined';

class DealPage extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.restaurant ? 
          <DealPageCombined restaurant={this.props.restaurant} />
          : <LoadingPage />
        }

      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === props.match.params.id)
});

export default connect(mapStateToProps)(DealPage);