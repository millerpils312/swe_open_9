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

  // sets set
  set changeName(newName) {
    this.name = newName;
  }

  // gets get (also good for computed props)
  get getName() {
    return this.name;
  }
}

module.exports = CryptoCurrency;
