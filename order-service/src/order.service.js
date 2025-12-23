const axios = require('axios');
const eventBus = require('./event-bus');

async function checkout({ userId, amount, paymentMethod }) {

  if (paymentMethod === 'WALLET') {
    await axios.post('http://wallet-service:3000/wallet/debit', {
      userId,
      amount
    });
  }

  eventBus.publish('OrderPlaced', {
    userId,
    amount,
    paymentMethod
  });

  return { status: 'SUCCESS' };
}

module.exports = { checkout };
