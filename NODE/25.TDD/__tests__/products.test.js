const request = require('supertest')

const server = require('../index')
const { connect, getUri, closeDb } = require('../db')
const { Builder } = require('../builders/product-builder.js')

//Antes del test se conecta
beforeAll(async () => {
  const uri = await getUri()
  await connect({ uri })
})

//Después del test se desconecta
afterAll(async () => {
  await closeDb()
})

describe('POST /products', () => {
  test('should store a new product', async () => {
    const product = Builder.product()

    const response = await request(server)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201)

    const { _id, ...productStored } = response.body
    expect(productStored).toEqual(product)
    expect(_id).toBeTruthy()
  })
})
