import React from 'react';
import zomatoAuth from '../zomato/zomato';

class DealPageOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      data: [],
      location: [],
      zomatoID: props.zomato_id
    };
  };

  componentDidMount() {
    
    fetch(`https://developers.zomato.com/api/v2.1/restaurant?res_id=${this.state.zomatoID}`, zomatoAuth)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(() => ({
            data: result,
            location: result.location
          }));
        },
        (error) => {
          this.setState(() => ({ error }));
        }
      )
  };
  
  render() {
    return (
      <div>
        <h2>Overview</h2>
        <h4>Phone Number</h4>
        <h4>Cuisines</h4>
        <p>{this.state.data.cuisines}</p>
        <h4>Average Cost</h4>
        <p>{`$${this.state.data.average_cost_for_two} for two people`}</p>
        <h4>Address</h4>
        <p>{this.state.location.address}</p>
        <h3>{console.log(this.state.data)}</h3>
      </div> 
    );
  };
};


export default DealPageOverview;