const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP Logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Init route
route(app);

app.listen(port, () => {
  console.log(`\nExample app listening at http://localhost:${port}`);
});
