const selectRestaurants = (restaurants, { text, sortByCity, sortBy }) => {
  return restaurants.filter((restaurant) => {
    const textMatch = restaurant.tagline.toLowerCase().includes(text.toLowerCase()) ||
                      restaurant.location.suburb.toLowerCase().includes(text.toLowerCase());
    const cityMatch = restaurant.location.city.includes(sortByCity.toLowerCase());

    return textMatch && cityMatch;
  }).sort((a, b) => {
    if (sortBy === 'discount') {
      return b.discount - a.discount;
    } else if (sortBy === 'recommendation') {
      return b.recommendation - a.recommendation;
    } else {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
  });
};

export default selectRestaurants;