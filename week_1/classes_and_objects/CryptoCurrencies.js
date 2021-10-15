const Currency = require('./Currency');

class CryptoCurrency extends Currency {
  static CryptoCurrencies = [];

  constructor(name, price) {
    super(name, price);
    CryptoCurrency.CryptoCurrencies.push(this);
  }

  // static keyword allows access to method without
  // creating an instance of the class
  static marketCap(price, circulatingSupply) {
    return price * circulatingSupply;
  }
}

module.exports = CryptoCurrency;
