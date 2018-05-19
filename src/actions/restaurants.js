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
        const coins = [];

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