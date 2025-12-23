const express = require('express');
const router = express.Router();

const { registerUser } = require('./user.service');

/**
 * POST /users/register
 */
router.post('/register', (req, res) => {
  const { id, name, notificationPreference, referralCode } = req.body;

  if (!id || !notificationPreference) {
    return res.status(400).json({ message: 'Invalid request' });
  }

  const user = registerUser({
    id,
    name,
    notificationPreference,
    referralCode
  });

  res.status(201).json(user);
});

module.exports = router;
