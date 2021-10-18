module.exports = function () {
  return new Promise((resolve, reject) => {
    // set timeout will mock a network requests for us that would take some time
    setTimeout(() => {
      //resolve('done');
      reject('failed');
    }, 1000);
  });
};
