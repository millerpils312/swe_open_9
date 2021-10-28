const express = require('express');

// network address to accept connections on
const port = 3001;

// assign instance of express to app variable
const app = express();

// handle http://localhost:3001
app.get('/', (request, response) => {
  response.send(`Hello, SWEOpen9 AKA Cool Coderz.`);
});

// handle http://localhost:3001/restaurant/1 - dynamic route parameters
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

// listen for connections on port 3001 - this starts the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
