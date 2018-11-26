const express = require('express');
const router = express.Router();

const { userRoutes } = require('./users');

router.get('/', (req, res) => {
  res.send('Hello, Welcome to the index page');
});

module.exports = {
  router,
  userRoutes
};