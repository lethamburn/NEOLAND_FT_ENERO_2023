module.exports.Builder = {
  product: ({
    name = 'my product',
    description = 'this is a test',
    price = '100',
  } = {}) => ({
    name,
    description,
    price,
  }),
}
