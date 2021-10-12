var myObj = {
  name: 'Daniel', // key + value
  age: 35,
  likes: ['Football', 'Cycling', 'Houseplants'],
  hobbies: function () {
    return this.likes; // this is like "self" in python
  },
};

// console.log(myObj.hobbies()[1]);

var cryptoCurrencies = [
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

let childCoins = [
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

console.log(childCoins[0].parentCoin.name);

// different ways to write a function

const myFunction1 = () => 'string'; // implied return (introduced in es6 2015)

const myFunction2 = function () {
  return 'string'; // normal return
};
