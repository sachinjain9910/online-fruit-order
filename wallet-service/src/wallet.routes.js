const express = require('express');
const router = express.Router();

const walletStore = require('./wallet.store');
const { deductBalance } = require('./wallet.service');

/**
 * Get wallet balance
 */
router.get('/:userId', (req, res) => {
  const balance = walletStore.getBalance(req.params.userId);
  res.json({ userId: req.params.userId, balance });
});

/**
 * Deduct wallet (used by order service)
 */
router.post('/deduct', (req, res) => {
  const { userId, amount } = req.body;

  try {
    deductBalance(userId, amount);
    res.json({ message: 'Wallet deducted successfully' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
