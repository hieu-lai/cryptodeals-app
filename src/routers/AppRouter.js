import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUsPage from '../components/AboutUsPage';
import TermsAndConditionsPage from '../components/TermsAndConditionsPage';
import PrivacyPolicyPage from '../components/PrivacyPolicyPage';
import RestaurantPage from '../components/RestaurantPage';


export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <PublicRoute path="/" component={DashboardPage} exact={true} />
        <PublicRoute path="/about-cryptodeals" component={AboutUsPage} />
        <PublicRoute path="/terms-and-conditions" component={TermsAndConditionsPage} />
        <PublicRoute path="/privacy-policy" component={PrivacyPolicyPage} />
        <PublicRoute path="/deal/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
