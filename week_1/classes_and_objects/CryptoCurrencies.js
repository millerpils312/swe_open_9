class CryptoCurrency {
  static CryptoCurrencies = [];

  constructor(name, price) {
    this.name = name;
    this.price = price;
    CryptoCurrency.CryptoCurrencies.push(this);
  }

  // static keyword allows access to method without
  // creating an instance of the class
  static marketCap(price, circulatingSupply) {
    return price * circulatingSupply;
  }
}

module.exports = CryptoCurrency;
