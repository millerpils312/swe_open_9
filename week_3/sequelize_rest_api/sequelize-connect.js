const Sequelize = require('sequelize');

// import the models
const {
  restaurantModel,
  menuModel,
  menuItemModel,
} = require('./models/models');

// connects to the db on localhost
const connection = new Sequelize('db', 'user', 'pass', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './database/db.sqlite',
});

// instances of the models - Restaurant etc are the table names
const Restaurant = connection.define('Restaurant', restaurantModel);
const Menu = connection.define('Menu', menuModel);
const MenuItem = connection.define('MenuItem', menuItemModel);

// define the relationships

/*
  Restaurant -> Menus = one to many
  Menus -> MenuItems = one to many

  Menu belongs to one Restaurant
  MenuItem belongs to one Menu
*/

// one-to-one relationship
Menu.belongsTo(Restaurant);

// one-to-one relationship
MenuItem.belongsTo(Menu);

// one-to-many relationship
Restaurant.hasMany(Menu);

// one-to-many relationship
Menu.hasMany(MenuItem);

module.exports = { connection, Restaurant, Menu, MenuItem };
