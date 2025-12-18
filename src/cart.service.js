module.exports = function calculateCartTotal(cartItems) {
  const PRODUCT_PRICES = {
    APPLE: 10,
    ORANGE: 20
  };

  let total = 0;

  for (const item of cartItems) {
    const price = PRODUCT_PRICES[item.productId];
    total += price * item.quantity;
  }

  return total;
};

module.exports = function calculateCartTotal(cartItems) {
  const PRODUCT_PRICES = {
    APPLE: 10,
    ORANGE: 20
  };

  let total = 0;

  for (const item of cartItems) {
    if (item.productId === 'APPLE') {
      const payableApples = Math.ceil(item.quantity / 2);
      total += payableApples * PRODUCT_PRICES.APPLE;
    } else {
      total += PRODUCT_PRICES[item.productId] * item.quantity;
    }
  }

  return total;
};
