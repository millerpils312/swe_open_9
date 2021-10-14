class CryptoCurrency {
  constructor(name, price, circulatingSupply) {
    this.name = name;
    this.price = price;
    this.circulatingSupply = circulatingSupply;
  }

  marketCap() {
    return this.price * this.circulatingSupply;
  }
}

module.exports = CryptoCurrency;