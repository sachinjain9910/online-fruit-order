const express = require('express');
const app = express();

const PORT = 3001;

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'user-service'
  });
});

app.listen(PORT, () => {
  console.log('user-service running on port', PORT);
});