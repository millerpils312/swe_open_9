const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const {
  allowInsecurePrototypeAccess,
} = require('@handlebars/allow-prototype-access');

Handlebars.registerPartial('head', '{{head}}');

// setup our templating engine
const handlebars = expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
});

module.exports = handlebars;
