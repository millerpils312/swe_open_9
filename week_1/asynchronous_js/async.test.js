const timeoutCallback = require('./timeout_callback');
const timeoutPromise = require('./timeout_promise');
const fetch = require('./fetch_async');

describe('callback timeout', () => {
  test('it should call the callback function', (done) => {
    function callback(str) {
      // note the expect statement is in the callback itself
      expect(str).toBe('done');
      // call done() when we're done with our tests
      done();
    }

    timeoutCallback(callback);
  });
});

describe('promise timeout', () => {
  test("it should return the promise and resolve with 'done'", () => {
    // Jest requires us to "return" the function that produces the promise
    return (
      timeoutPromise()
        // resolve = success
        .then((result) => {
          expect(result).toBe('done');
        })
        // reject = catch
        .catch((error) => {
          expect(error).toBe('failed');
        })
    );
  });
});

describe('async timeout', () => {
  // async jest tests require async keyword
  test('the async function fetch should return a response object', async () => {
    // js/jest will "await" the response from the fetch function
    const response = await fetch();
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('Daniel');
  });
});
