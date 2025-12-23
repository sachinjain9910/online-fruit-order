const express = require('express');
const app = express();

const userRoutes = require('./user.routes');

app.use(express.json());
app.use('/users', userRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'user-service' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('user-service running on port', PORT);
});
