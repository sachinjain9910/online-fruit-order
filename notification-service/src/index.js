const express = require('express');
const eventBus = require('./event-bus');
const {
  handleUserRegistered,
  handleWalletCredited,
  handleOrderPlaced
} = require('./notification.service');

const app = express();

eventBus.subscribe('UserRegistered', handleUserRegistered);
eventBus.subscribe('WalletCredited', handleWalletCredited);
eventBus.subscribe('OrderPlaced', handleOrderPlaced);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'notification-service' });
});

app.listen(3000, () => {
  console.log('notification-service running on port 3000');
});
