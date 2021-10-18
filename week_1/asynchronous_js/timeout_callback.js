module.exports = function (callback) {
  setTimeout(() => {
    return callback('done');
  }, 1000);
};
