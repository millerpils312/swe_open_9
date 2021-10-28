const express = require('express');

// network address to accept connections on
const port = 3001;

// assign instance of express to app variable
const app = express();

// serve static assets from public dir
app.use(express.static('public'));

// support urlencoded bodies (e.g. form POST)
app.use(express.urlencoded({ extended: true }));

// handle http://localhost:3001
app.get('/', (request, response) => {
  response.send(`Hello, SWEOpen9 AKA Cool Coderz.`);
});

// handle http://localhost:3001/restaurant/999 - dynamic route parameters
app.get('/restaurant/:id', (request, response) => {
  // :id = a dynamic (changeable) parameter

  response.send(
    `Hello, you asked for the restaurant with an ID of ${request.params.id}`
  );
});

// handle http://localhost:3001/crypto/1 - dynamic route parameters
app.get('/crypto/:id', (request, response) => {
  // mock fetch crypto id from database
  obj = null;

  if (request.params.id === '1') {
    obj = {
      id: request.params.id,
      name: 'Bitcoin',
    };
  } else {
    obj = 'Some other coin';
  }

  response.send(obj);
});

app.post('/users', (request, response) => {
  response.send(
    `Hey ${request.body.username}!
    <a href="/">Go back home</a>
  `
  );
});

// listen for connections on port 3001 - this starts the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
