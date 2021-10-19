const CryptoCurrency = require('./CryptoCurrencies');
const Currency = require('./Currency');
let bitcoin = null,
  ethereum = null;

describe('crypto currencies', () => {
  beforeAll(() => {
    bitcoin = new CryptoCurrency('Bitcoin', 40_000, 4_000_000);
    ethereum = new CryptoCurrency('Ethereum', 40_000, 4_000_000);
  });

  test('bitcoins should have name', () => {
    expect(bitcoin.name).toBe('Bitcoin');
    expect(ethereum.name).toBe('Ethereum');
  });

  test('it should return a number from market cap', () => {
    expect(CryptoCurrency.marketCap(1, 10)).toEqual(10);
  });

  test('a crypto should be an instance of currency super class', () => {
    expect(bitcoin).toBeInstanceOf(Currency);
    expect(ethereum).toBeInstanceOf(Currency);
  });

  test('can change name using setter and get it using getter', () => {
    bitcoin.changeName = 'Bitcoin2';
    expect(bitcoin.getName).toEqual('Bitcoin2');
  });
});
