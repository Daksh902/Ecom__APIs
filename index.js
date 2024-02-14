const express = require('express');
const productRoutes = require('./routes/routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/products', productRoutes);

module.exports = app;
