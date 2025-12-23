const express = require('express');
const app = express();

const walletRoutes = require('./wallet.routes');

app.use(express.json());
app.use('/wallet', walletRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'wallet-service' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('wallet-service running on port', PORT);
});
