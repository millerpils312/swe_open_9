class CryptoCurrency {
  constructor(name, price) {
    super(name, price);
  }

  marketCap(price, circulatingSupply) {
    return price * circulatingSupply;
  }
}

module.exports = CryptoCurrency;
