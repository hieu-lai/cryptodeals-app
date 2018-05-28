/*
 * Render main page with deals
*/

import React from 'react';
import DashboardPageHeader from './DashboardPageHeader';
import RestaurantsList from './RestaurantsList';

const DashboardPage = () => (
  <div>
    <DashboardPageHeader />
    <RestaurantsList />
  </div>
);

export default DashboardPage;
