import React from 'react';
import { connect } from 'react-redux';
import { sortByDate, sortByDiscount, sortByRecommendation } from '../actions/filters';

class DashboardPageHeader extends React.Component {
  state = {
    sortBy: ''
  };
  
  handleSortBy = (e) => {
    const sortBy = e.target.value;
    this.setState(() => ({ sortBy }))
    if (sortBy === 'discount') {
      this.props.sortByDiscount();
    } else if (sortBy === 'recommendation') {
      this.props.sortByRecommendation();
    } else if (sortBy === 'date') {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <div className="content-container">
        <div className="dashboard-header__content">
          {this.props.filters.sortByCity ? <h1>{this.props.filters.sortByCity}</h1> : <h1>Deals around Australia</h1>}
          <select
            className="select"
            value={this.state.sortBy}
            onChange={this.handleSortBy}
          >
            <option value="discount">Discount %</option>
            <option value="date">Newest Deals</option>
            <option value="recommendation">Recommended</option>            
          </select>  
        </div>  
      </div>
    )
  }
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
