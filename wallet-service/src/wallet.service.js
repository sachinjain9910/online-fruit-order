const eventBus = require('./event-bus');
const walletStore = require('./wallet.store');

function handleUserRegistered(event) {
  if (!event.referralCode) return;

  walletStore.credit(event.referralCode, 10);

  eventBus.publish('WalletCredited', {
    referrerCode: event.referralCode,
    amount: 10
  });
}

function deductBalance(userId, amount) {
  walletStore.debit(userId, amount);
}

module.exports = {
  handleUserRegistered,
  deductBalance
};
