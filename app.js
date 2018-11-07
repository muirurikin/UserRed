const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

const app = express();

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});