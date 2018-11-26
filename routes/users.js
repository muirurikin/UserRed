const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Users');
});

router.postt('/', (req, res) => {
  res.send('User Added');
});

module.exports = router;