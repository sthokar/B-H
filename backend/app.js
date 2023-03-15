const express = require('express');
const app = express();

app.use(express.json());

const products = require('./routes/product');

app.use('/api/v1', products)
app.use((err, req, res, next) => {
    console.error(err.stack);
  
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  });

module.exports = app;