const express = require('express');
const Router = express.Router();
const { Restaurant } = require('../sequelize-connect');

Router.post('/', async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    await Restaurant.create(req.body);

    // 201 = created a resource
    res.status(201).send();
  } catch (e) {
    res.status(400).send(e.message);
  }
}).get('/', async (req, res) => {
  try {
    // create a row in the database using sequelize create method
    const restaurants = await Restaurant.findAll({});

    // 200 = success
    res.status(200).send(restaurants);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = Router;
