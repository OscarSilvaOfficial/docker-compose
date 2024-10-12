const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('APP: request recived')
  res.send('Hello from Service!');
});

app.listen(3000, () => {
  console.log('Test app listening on port 3000');
});
