const CryptoCurrency = require('./CryptoCurrencies');
let bitcoin = null,
  ethereum = null;

describe('crypto currencies', () => {
  beforeAll(() => {
    bitcoin = new CryptoCurrency('Bitcoin', 40_000, 4_000_000);
    ethereum = new CryptoCurrency('Ethereum', 40_000, 4_000_000);
  });

  test('bitcoin should have name', () => {
    expect(bitcoin.name).toBe('Bitcoin');
    expect(ethereum.name).toBe('Ethereum');
  });

  test('it should return a number from market cap', () => {
    expect(CryptoCurrency.marketCap(1, 10)).toEqual(10);
  });
});
