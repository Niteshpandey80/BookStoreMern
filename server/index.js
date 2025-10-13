const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3001;
app.get('/', (req, res) => {
  res.send('Hello Bro');
});
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
