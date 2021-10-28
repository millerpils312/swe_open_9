const express = require('express');

// network address to accept connections on
const port = 3001;

// assign instance of express to app variable
const app = express();

// handle http://localhost:3001
app.get('/', (request, response) => {
  response.send(`Hello, SWEOpen9 AKA Cool Coderz. Status code`);
});

// handle http://localhost:3001/restaurant/1 - dynamic route parameters
app.get('/restaurant/:id', (request, response) => {
  response.send(
    `Hello, you asked for the crypto with an ID of ${request.params.id}`
  );
});

// listen for connections on port 3001 - this starts the server
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
