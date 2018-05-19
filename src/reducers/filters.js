// Filters reducer

const filtersReducerDefaultSate = {
  text: '',
  sortByCity: '',
  sortBy: 'discount',
};

const filtersReducer = (state = filtersReducerDefaultSate, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_CITY':
      return {
        ...state,
        sortByCity: action.city
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'data'
      };
    case 'SORT_BY_RECOMMENDATION':
      return {
        ...state,
        sortBy: 'recommendation'
      };
    case 'SORT_BY_DISCOUNT':
      return {
        ...state,
        sortBy: 'discount'
      };
    default:
      return {
        ...state  
      };  
  }
};

export default filtersReducer;