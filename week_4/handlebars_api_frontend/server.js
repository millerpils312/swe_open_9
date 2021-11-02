const express = require('express');
const app = express();
const port = 8001;
const restaurantRoutes = require('./routes/web/restaurants');
const handlebars = require('./handlebars');

// set-up view "engine" - res.render
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

// support urlencoded bodies (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

// use restaurant routes
app.use('/restaurants', restaurantRoutes);

// serve an index page
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
