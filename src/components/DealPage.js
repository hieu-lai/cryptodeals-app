import React from 'react';
import { connect } from 'react-redux';
import DealPageHeader from './DealPageHeader';

class DealPage extends React.Component {
  render() {
    return (
      <div>
        <DealPageHeader restaurant={this.props.restaurant}/>
      </div>
    );
  };
};
// const DealPage = (props) => (
//   <div>
//     <DealPageHeader restaurant={props.restaurant}/>
//   </div>
// );

const mapStateToProps = (state, props) => ({
  restaurant: state.restaurants.find((restaurant) => restaurant.id === props.match.params.id)
});

export default connect(mapStateToProps)(DealPage);