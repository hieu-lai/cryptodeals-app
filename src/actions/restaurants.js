/*
 *Action that fetch restaurant data from firebase and dispact to redux store.
*/

import database from '../firebase/firebase';

// SET_RESTAURANTS
export const setRestaurants = (restaurants) => ({
  type: 'SET_RESTAURANTS',
  restaurants
});

export const startSetRestaurants = () => {
  return (dispatch) => {
    return database.ref('restaurants')
      .once('value')
      .then((snapshot) => {
        const restaurants = [];

        snapshot.forEach((childSnapshot) => {
          restaurants.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setRestaurants(restaurants));
      });
  };
};