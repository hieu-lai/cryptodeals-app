import React from 'react';

const DealPageHeader = (props) => (
  <div>
    <h3>This is deal page header</h3>
    <h3>{props.restaurant ? props.restaurant.tagline : null}</h3>
  </div>
);


export default DealPageHeader;