const fetch = require('node-fetch');

/**
 *
 * @returns Promise
 */
function returnAPromise() {
  return new Promise((resolve, reject) => {
    // do some kind of network request here that takes time

    // request returns some data
    const response = {
      status: 200,
      body: {
        name: 'Daniel',
      },
    };

    // request was a success? Resolve it!
    resolve(response);

    // request failed? Reject it!
    reject('Error: something went wrong');
  });
}

returnAPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

////////////////////////////////////////////////

/**
 *
 * @returns Promise
 */
async function fetchJson() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  return json;
}

fetchJson().then((json) => console.log(json));
