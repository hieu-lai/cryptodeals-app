const cryptocoinsReducerDefaultState = [];

const cryptocoinsReducer = (state = cryptocoinsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CRYPTOCOINS':
      return action.coins;
    default:
      return state;  
  };
};

export default cryptocoinsReducer;