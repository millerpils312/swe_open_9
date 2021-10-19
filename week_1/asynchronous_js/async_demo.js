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
    // resolve(response);

    // request failed? Reject it!
    reject('Error: something went wrong');
  });
}

returnAPromise()
  .then((response) => console.log(response)) // then = success/resolved
  .catch((error) => console.log(error)); // catch = error

////////////////////////////////////////////////

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json()) // success
  .then((json) => console.log(json)) // success
  .catch((e) => console.log(e.message)); // failure

////////////////////////////////////////////////

/**
 *
 * @returns Promise
 */
async function fetchJson() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
}

fetchJson()
  .then((json) => console.log(json))
  .catch((e) => console.log(e.message));
