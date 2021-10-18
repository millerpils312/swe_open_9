module.exports = async function fetch() {
  // make some kind of network request here
  const response = {
    status: 200,
    body: {
      name: 'Daniel',
    },
  };

  return response;
};
