const express = require('express');
const app = express();

const PORT = 3003;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'cart-service'
  });
});

app.listen(PORT, () => {
  console.log('cart-service running on port', PORT);
});