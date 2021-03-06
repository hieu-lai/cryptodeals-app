/*
 * Renders the top component that includes search bar and select option that 
 * filter by city.
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortByCity, setTextFilter } from '../actions/filters';

class Header extends React.Component {
  state = {
    text: '',
    sortByCity: ''
  };

  handleSortByCity = (e) => {
    const city = e.target.value;
    this.setState(() => ({ sortByCity: city }));
    this.props.sortByCity(city);
  };
  handleInputQuery = (e) => {
    e.preventDefault();
    window.location.assign('/');
    const text = e.target.elements.query.value;
    this.setState(() => ({ text }));
    
    e.target.elements.query.value = '';
  };
  handleClearSessionStorage = () => {
    sessionStorage.clear();
    window.location.assign('/');
  };
  // Store data to local and session storage.
  componentDidMount() {
    try {
      const json1 = localStorage.getItem('sortByCity');
      const json2 = sessionStorage.getItem('text');
      const city = JSON.parse(json1);
      const text = JSON.parse(json2);
      if(city) {
        this.setState(() => ({ sortByCity: city }));
        this.props.sortByCity(city);
      }
      if (text) {
        this.setState(() => ({ text }));
        this.props.setTextFilter(text);
      }
    } catch(e) {
      // Do nothing
    }
  };
  // Check if there is data in local and session storage.
  componentDidUpdate(prevProps, prevState) {
    if(prevState.sortByCity !== this.state.sortByCity) {
      const json1 = JSON.stringify(this.state.sortByCity);
      localStorage.setItem('sortByCity', json1);
    }
    if(prevState.text !== this.state.text) {
      const json2 = JSON.stringify(this.state.text);
      sessionStorage.setItem('text', json2);
    }
  };
  
  render() { 
    return (
      <header className="header">
        <div className="content-container">
          <Link className="header--link" to="/partner-up"><h5 className="header__superscript">Advertise</h5></Link>
          <div className="header__content">            
            <div className="header__title" onClick={this.handleClearSessionStorage}>
              <img className="header__icon" src="/images/icon_white.png" />
              <h1>CryptoDeals</h1>
            </div>        
            <form className="form-input" onSubmit={this.handleInputQuery}>
            <input 
              className="text-input__search"
              type="text" 
              placeholder="Find deals" 
              name="query"              
            />
            </form>
            <select
              className="select__location"
              value={this.state.sortByCity}
              onChange={this.handleSortByCity}  
            >
              {!this.state.sortByCity ? <option value="">Location</option> : ""}
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

const mapStateToProps = (state, props) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch, props) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByCity: (city) => dispatch(sortByCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
