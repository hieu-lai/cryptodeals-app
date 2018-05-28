/*
 * Renders the tagline from that particular restaurant.
*/

import React from 'react';

const DealPageHeader = ({ tagline }) => (
  <div className="content-container" >
    <h1 className="dealpage-header__title">{tagline}</h1>
  </div>
);


export default DealPageHeader;