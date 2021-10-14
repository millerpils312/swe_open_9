// // module.exports, exports and require = CommonJS used by node
// // es6 uses export, export default and import x from "dir"

const { cryptoCurrencies, childCoins } = require('./objects');

describe('crypto currencies', () => {
  test.skip('it should find the name of the first crypto currency', () => {
    expect(cryptoCurrencies[0].name).toBe('Bitcoin');
  });

  test.skip('it should return market cap from market cap function', () => {
    expect(typeof cryptoCurrencies[0].marketCap()).toEqual('number');
  });

  test('it should return a string including the popularity of the crpto currency', () => {
    expect(cryptoCurrencies[0].popularity()).toBe('Hello');
  });
});
