const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  price: { type: String },
})

const Product = mongoose.model('Product', ProductSchema)

module.exports.store = async ({ name, description, price }) => {
  const product = new Product({
    name,
    description,
    price,
  })
  await product.save()
  return product
}
