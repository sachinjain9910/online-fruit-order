describe('Cart Service - Step 1 Basic Pricing', () => {

  const calculateCartTotal = require('../src/cart.service');

  test('should return Rs.10 when 1 apple is added to cart', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(10);
  });

  test('should return Rs.20 when 2 apples are added to cart', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 2 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(10);
  });

  test('should return Rs.20 when 1 orange is added to cart', () => {
    const cartItems = [
      { productId: 'ORANGE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(20);
  });

  test('should return Rs.40 when 2 oranges are added to cart', () => {
    const cartItems = [
      { productId: 'ORANGE', quantity: 2 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(40);
  });

  test('should calculate total for mixed fruits correctly', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 2 },
      { productId: 'ORANGE', quantity: 1 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(30);
  });

});

describe('Cart Service - Step 2 Apple Buy 1 Get 1 Offer', () => {

  const calculateCartTotal = require('../src/cart.service');

  test('should charge Rs.10 for 2 apples with buy 1 get 1 offer', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 2 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(10);
  });

  test('should charge Rs.20 for 3 apples with buy 1 get 1 offer', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 3 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(20);
  });

  test('should charge Rs.20 for 4 apples with buy 1 get 1 offer', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 4 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(20);
  });

  test('should charge Rs.30 for 5 apples with buy 1 get 1 offer', () => {
    const cartItems = [
      { productId: 'APPLE', quantity: 5 }
    ];

    const total = calculateCartTotal(cartItems);

    expect(total).toBe(30);
  });

});
