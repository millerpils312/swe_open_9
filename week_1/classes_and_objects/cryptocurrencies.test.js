const CryptoCurrency = require('./CryptoCurrencies');
let bitcoin = null,
  ethereum = null;

describe('crypto currencies', () => {
  beforeAll(() => {
    bitcoin = new CryptoCurrency('Bitcoin', 40_000, 4_000_000);
    ethereum = new CryptoCurrency('Ethereum', 40_000, 4_000_000);
  });

  test('it should return a number from market cap', () => {
    expect(typeof bitcoin.marketCap()).toBe('number');
  });
});
