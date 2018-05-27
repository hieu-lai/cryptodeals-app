import React from 'react';

class AboutUsPage extends React.Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <div className="content-container">
        <div className="aboutus-container">
          <h2>About CryptoDeals</h2>
          <p>
            Just a random guy pushing for cryptocurrency adoption in businesses 
            and everyday life. If you have any suggestions or feedbacks don't 
            hesistate to contact me at hello@cryptodeals.com.au.
          </p> 
        </div>   
      </div>
    )
  };
};


export default AboutUsPage;