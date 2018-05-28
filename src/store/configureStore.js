/*
 * Redux Store
*/

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import restaurantsReducer from '../reducers/restaurants';
import filtersReducer from '../reducers/filters';
import cryptocoinsReducer from '../reducers/cryptocoins';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      restaurants: restaurantsReducer,
      coins: cryptocoinsReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
