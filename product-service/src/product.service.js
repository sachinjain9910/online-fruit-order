module.exports = function sortProducts(products, { sortBy, order }) {
  return [...products].sort((a, b) => {

    if (sortBy === 'price') {
      // Primary: price
      if (a.price !== b.price) {
        return order === 'asc'
          ? a.price - b.price
          : b.price - a.price;
      }
      // Tie-breaker: rating (highest first)
      return b.rating - a.rating;
    }

    if (sortBy === 'rating') {
      // Primary: rating
      if (a.rating !== b.rating) {
        return order === 'asc'
          ? a.rating - b.rating
          : b.rating - a.rating;
      }
      // Tie-breaker: price (cheapest first)
      return a.price - b.price;
    }

    return 0;
  });
};
