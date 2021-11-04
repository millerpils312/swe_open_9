// get the instance of sequelize
const { connection } = require('./sequelize-connect');
const express = require('express');
const app = express();
const port = 3002;
const restaurantRoutes = require('./resources/restaurant');

// support req.body parsing
app.use(express.json());

app.use('/api/restaurants', restaurantRoutes);

// 1. create an endpoint that will get a restaurant by ID (HTTP Method = get)

// 2. create an endpoint that will delete a restaurant by ID (HTTP Method = delete)

// 3. create an endpoint that will update a restaurant by ID (HTTP Method = put)

// 4. create a suite of menu and menu item routes that will CRUD each resource

// 5. find a way to relate the menu items to the menu and the menu to the restaurant

// 6 [optional]. use Sequelize validation to validate the data being sent (you'll do this in the model). Which status code would you send back?

/* 7 [optional]. take a look at query params to sort results and to get a subset of results, 

e.g. to get a subset of results you might use a limit param:

http://localhost:3001/restaurants?limit=2

To sort, you might sort by a field and sort ascending or descending. E.G to sort 

http://localhost:3001/restaurants?sort_by=name&order_by=asc


/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    // force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log('Sequelize connected'))
  .catch((e) => console.log(`Caught error: ${e}`));

app.listen(port, () => console.log(`Express server running on port ${port}`));
