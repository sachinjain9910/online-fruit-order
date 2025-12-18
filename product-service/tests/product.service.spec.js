const sortProducts = require('../src/product.service');

describe('Product Service - Step 4 Sorting', () => {

  const products = [
    { id: 'A', price: 10, rating: 4 },
    { id: 'B', price: 20, rating: 5 },
    { id: 'C', price: 10, rating: 5 },
    { id: 'D', price: 30, rating: 3 }
  ];

  test('should sort products by price ascending (cheapest first)', () => {
    const result = sortProducts(products, { sortBy: 'price', order: 'asc' });
    expect(result.map(p => p.id)).toEqual(['C', 'A', 'B', 'D']);
  });

  test('should sort products by price descending (costliest first)', () => {
    const result = sortProducts(products, { sortBy: 'price', order: 'desc' });
    expect(result.map(p => p.id)).toEqual(['D', 'B', 'C', 'A']);
  });

  test('should sort products by rating descending (highest first)', () => {
    const result = sortProducts(products, { sortBy: 'rating', order: 'desc' });
    expect(result.map(p => p.id)).toEqual(['C', 'B', 'A', 'D']);
  });

  test('should sort products by rating ascending (lowest first)', () => {
    const result = sortProducts(products, { sortBy: 'rating', order: 'asc' });
    expect(result.map(p => p.id)).toEqual(['D', 'A', 'C', 'B']);
  });

  test('when price same, highest rated product should come first', () => {
    const result = sortProducts(products, { sortBy: 'price', order: 'asc' });
    expect(result[0].id).toBe('C'); // price 10, rating 5
  });

  test('when rating same, cheapest product should come first', () => {
    const sameRating = [
      { id: 'X', price: 30, rating: 4 },
      { id: 'Y', price: 10, rating: 4 }
    ];

    const result = sortProducts(sameRating, { sortBy: 'rating', order: 'desc' });
    expect(result[0].id).toBe('Y');
  });

});
