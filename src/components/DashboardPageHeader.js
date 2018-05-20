import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByDiscount, sortByRecommendation } from '../actions/filters';

const DashboardPageHeader = (props) => {
  const handleSortBy = (e) => {
    if (e.target.value === 'discount') {
      props.sortByDiscount();
    } else if (e.target.value === 'recommendation') {
      props.sortByRecommendation();
    } else if (e.target.value === 'date') {
      props.sortByDate();
    }
  };
  
  return (
    <div>
      {props.filters.sortByCity ? <h1>{props.filters.sortByCity}</h1> : <h1>Deals around Australia</h1>}
      <select
        value={props.filters.sortBy}
        onChange={handleSortBy}
      >
        <option value="discount">Discount %</option>
        <option value="recommendation">Recommended</option>
        <option value="date">Newest Deals</option>
      </select>  
    </div>
  )
  
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  sortByDiscount: () => dispatch(sortByDiscount()),
  sortByRecommendation: () => dispatch(sortByRecommendation()),
  sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageHeader);
