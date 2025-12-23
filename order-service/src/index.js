const express = require('express');
const app = express();
const orderRoutes = require('./order.routes');

app.use(express.json());
app.use('/orders', orderRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'order-service' });
});

app.listen(3000, () => {
  console.log('order-service running on port 3000');
});
