const express = require('express');
const Router = express.Router();
const fetch = require('node-fetch');
const config = require('../../config');
const url = `${config.url.restaurants}`; // http://localhost:3002/api/restaurants

Router
  // READ
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
