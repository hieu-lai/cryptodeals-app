// Restaurants Reducer
const restaurantsReducerDefaultState = [];

const restaurantsReducer = (state = restaurantsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS':
      return action.restaurants;
    default:
      return state;
  };
};

export default restaurantsReducer;