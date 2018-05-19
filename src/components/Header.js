import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortByCity, setTextFilter } from '../actions/filters';

class Header extends React.Component {
  handleSortByCity = (e) => {
    this.props.sortByCity(e.target.value);
  };
  handleSetTextFilter = (e) => {
    e.preventDefault();
    this.props.setTextFilter(e.target.value);
  };

  render() {
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/">
              <h1>CryptoDeals</h1>
            </Link>        
            <input 
              type="text" 
              placeholder="Find deals" 
              value={this.props.filters.text}
              onChange={this.handleSetTextFilter}
            />
            <select
              value={this.props.filters.sortByCity}
              onChange={this.handleSortByCity}  
            >
              {!this.props.filters.sortByCity ? <option value="">Select region</option> : ""}
              <option value="Melbourne">Melbourne</option>
              <option value="Sydney">Sydney</option>
              <option value="Brisbane">Brisbane</option>
            </select>  
          </div>
        </div>
      </header>
    )
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByCity: (city) => dispatch(sortByCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
