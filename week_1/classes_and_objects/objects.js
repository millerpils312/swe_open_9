const cryptoCurrencies = [
  {
    name: 'Bitcoin',
    price: 49000,
    circulatingSupply: 2_100_000,
    marketCap: function () {
      return this.price * this.circulatingSupply;
    },
  },
  {
    name: 'Ethereum',
    price: 2200,
    circulatingSupply: 2_000_000,
    marketCap: function () {
      return this.price * this.circulatingSupply;
    },
  },
];

const childCoins = [
  {
    name: 'Uniswap',
    price: 2200,
    circulatingSupply: 2_000_000,
    marketCap: function () {
      return this.price * this.circulatingSupply;
    },
    parentCoin: cryptoCurrencies[1],
  },
];

module.exports = { cryptoCurrencies, childCoins };
