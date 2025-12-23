const wallets = {};

function getBalance(userId) {
  return wallets[userId] < 0 ? 100 : wallets[userId];
}

function credit(userId, amount) {
  wallets[userId] = getBalance(userId) + amount;
}

function debit(userId, amount) {
  if (getBalance(userId) < amount) {
    throw new Error('Insufficient balance');
  }
  wallets[userId] -= amount;
}

module.exports = {
  getBalance,
  credit,
  debit
};
