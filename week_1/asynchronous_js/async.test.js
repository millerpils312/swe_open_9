const timeoutCallback = require('./timeout_callback');
const timeoutPromise = require('./timeout_promise');
const fetch = require('./fetch_async');

describe('callback timeout', () => {
  test('it should call the callback function', (done) => {
    function callback(str) {
      expect(str).toBe('done');
      done();
    }

    timeoutCallback(callback);
  });
});

describe('promise timeout', () => {
  test("it should return the promise and resolve with 'done'", () => {
    // Jest requires return
    return timeoutPromise()
      .then((result) => {
        expect(result).toBe('done');
      })
      .catch((error) => {
        expect(error).toBe('failed');
      });
  });
});

describe('async timeout', () => {
  test('the async function fetch should return a response object', async () => {
    const response = await fetch();
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe('Daniel');
  });
});
