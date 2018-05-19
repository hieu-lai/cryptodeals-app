// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_CITY
export const sortByCity = (city) => ({
  type: 'SORT_BY_CITY',
  city
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_DISCOUNT
export const sortByDiscount = () => ({
  type: 'SORT_BY_DISCOUNT'
});

// SORT_BY_RECOMMENDATION
export const sortByRecommendation = () => ({
  type: 'SORT_BY_RECOMMENDATION'
});