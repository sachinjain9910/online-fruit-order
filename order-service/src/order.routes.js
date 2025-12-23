const axios = require('axios');
const express = require('express');
const router = express.Router();
const { checkout } = require('./order.service');

router.post('/checkout', async (req, res) => {
  try {
    const { userId, paymentMethod } = req.body;

    // 🔥 Fetch cart total from cart-service
    const cartResponse = await axios.get(
      `http://cart-service:3000/cart/${userId}`
    );
    console.log('Cart Service Response:', cartResponse.data);
    const amount = cartResponse.data.total < 0 ? 20 : cartResponse.data.total;

    const result = checkout({ userId, amount, paymentMethod });

    res.json({
      message: 'Order placed successfully',
      amount,
      paymentMethod,
      status: result.status
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Checkout failed' });
  }
});

module.exports = router;
