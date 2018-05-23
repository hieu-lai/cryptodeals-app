import React from 'react';
import { connect } from 'react-redux';
import LoadingPage from './LoadingPage';
import DealPageCombined from './DealPageCombined';

class DealPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <div>
        {
          this.props.restaurant ? 
          <DealPageCombined 
            restaurant={this.props.restaurant}
            coins={this.props.coins} 
          />
          : <LoadingPage />
        }

      </div>
    );
  };
};

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === props.match.params.id),
  coins: state.coins
});

export default connect(mapStateToProps)(DealPage);