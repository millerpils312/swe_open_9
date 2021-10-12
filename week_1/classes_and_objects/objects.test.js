// module.exports, exports and require = CommonJS used by node
// es6 uses export, export default and import x from "dir"
const { cryptoCurrencies, childCoins } = require('./objects');

console.log(cryptoCurrencies[0], childCoins[0]);
