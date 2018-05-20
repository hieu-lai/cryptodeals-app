import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sortByCity, setTextFilter } from '../actions/filters';

class Header extends React.Component {
  state = {
    sortByCity: ''
  };

  handleSortByCity = (e) => {
    const city = e.target.value;
    this.setState(() => ({ sortByCity: city }));
    this.props.sortByCity(city);
    console.log(this.props.filters);
    console.log(this.state);
  };
  handleInputQuery = (e) => {
    //e.preventDefault();
    const query = e.target.elements.query.value;
    this.props.setTextFilter(query);
    //this.props.history.push('/');
    e.target.elements.query.value = '';
    console.log(this.props.filters);
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('sortByCity');
      const sortByCity = JSON.parse(json);
      if(sortByCity) {
        this.setState(() => ({ sortByCity }));
      }
    } catch(e) {
      // Do nothing
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.sortByCity !== this.state.sortByCity) {
      const json = JSON.stringify(this.state.sortByCity);
      localStorage.setItem('sortByCity', json);
    }
  };
  
  render() { 
    return (
      <header className="header">
        <div className="content-container">
          <div className="header__content">
            <Link className="header__title" to="/">
              <h1>CryptoDeals</h1>
            </Link>        
            <form onSubmit={this.handleInputQuery}>
            <input 
              type="text" 
              placeholder="Find deals"
              name="query"
              
            />
            </form>
            <select
              value={this.state.sortByCity}
              onChange={this.handleSortByCity}  
            >
              {!this.state.sortByCity ? <option value="">Select region</option> : ""}
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
