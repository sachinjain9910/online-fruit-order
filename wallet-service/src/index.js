const express = require('express');
const app = express();

const PORT = 3005;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'wallet-service'
  });
});

app.listen(PORT, () => {
  console.log('wallet-service running on port', PORT);
});