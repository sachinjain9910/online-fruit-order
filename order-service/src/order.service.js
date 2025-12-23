const axios = require('axios');
const eventBus = require('./event-bus');

async function checkout({ userId, amount, paymentMethod }) {

  if (paymentMethod === 'WALLET') {
  const data =   await axios.post('http://wallet-service:3000/wallet/deduct', {
      userId,
      amount
    });
    console.log('Wallet Service Response:', data.data);
  }

  eventBus.publish('OrderPlaced', {
    userId,
    amount,
    paymentMethod
  });

  return { status: 'SUCCESS' };
}

module.exports = { checkout };
