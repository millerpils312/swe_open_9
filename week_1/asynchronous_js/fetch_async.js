// async/await functions require "async" keyword

module.exports = async function fetch() {
  // make some kind of network request here that returns a response:
  const response = {
    status: 200,
    body: {
      name: 'Daniel',
    },
  };

  return response;
};
