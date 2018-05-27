import React from 'react';
import DashboardPageHeader from './DashboardPageHeader';
import RestaurantsList from './RestaurantsList';

const DashboardPage = () => (
  <div>
    {console.log(process.env.FIREBASE_MESSAGING_SENDER_ID)}
    <DashboardPageHeader />
    <RestaurantsList />
  </div>
);

export default DashboardPage;
