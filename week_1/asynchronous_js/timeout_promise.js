module.exports = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('done');
      reject('failed');
    }, 1000);
  });
};
