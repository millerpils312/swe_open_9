// get the instance of sequelize
const { connection } = require('./sequelize-connect');

/**
 * Synchronize all models with db
 */
async function start() {
  await connection.sync({
    logging: false, // don't log everything
    force: true, // drop tables each time
  });
}

// run start and log any errors
start()
  .then(() => console.log('Sequelize connected'))
  .catch((e) => console.log(`Caught error: ${e}`));
