const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello Users');
});

router.get('/new', (req, res) => {
  res.send('User Added');
});

router.post('/', (req, res) => {
  res.send('User Added');
});

router.get('/:id/edit', (req, res) => {
  res.send('User Added');
});

router.put('/:id', (req, res) => {
  res.send('User Added');
});

router.delete('/id', (req, res) => {
  res.send('User Added');
});


module.exports = router;