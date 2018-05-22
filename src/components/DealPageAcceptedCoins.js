import React from 'react';

class DealPageAcceptedCoins extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div>
        <h2>Accepted here</h2>
        {Object.keys(this.props.coins).map((key) => <p key={key}>{key}</p>)}
        {console.log(this.props)}
      </div>
    )
  }
};

export default DealPageAcceptedCoins;