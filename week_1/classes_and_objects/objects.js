const cryptoCurrencies = [
  {
    name: 'Bitcoin',
    price: 49000,
    circulatingSupply: 2_100_000,
    marketCap: function () {
      return marketCapHelper(this.price, this.circulatingSupply);
    },
  },
  {
    name: 'Ethereum',
    price: 2200,
    circulatingSupply: 2_000_000,
    marketCap: function () {
      return marketCapHelper(this.price, this.circulatingSupply);
    },
  },
];

const childCoins = [
  {
    name: 'Uniswap',
    price: 2200,
    circulatingSupply: 2_000_000,
    // popularity: 324,
    marketCap: function () {
      return marketCapHelper(this.price, this.circulatingSupply);
    },
    parentCoin: cryptoCurrencies[1],
  },
];

function marketCapHelper(price, circulatingSupply) {
  return price * circulatingSupply;
}

module.exports = { cryptoCurrencies, childCoins };
