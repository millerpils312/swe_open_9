const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.restaurants}`; // http://localhost:3002/api/restaurants

// POST /restaurants
Router.post('/', async (req, res, next) => {
  try {
    await fetch(url, {
      method: 'post',
      body: JSON.stringify(req.body),
      headers: { 'Content-Type': 'application/json' },
    });
    res.redirect('/restaurants');
  } catch (error) {
    return next(error);
  }
})

  .get('/new', (req, res, next) => {
    // render the new restaurant form
    res.render('newRestaurant');
  })

  .get('/', async (req, res, next) => {
    try {
      const response = await fetch(url);
      const restaurants = await response.json();
      res.render('restaurants', { restaurants });
    } catch (error) {
      return next(error);
    }
  });

module.exports = Router;
