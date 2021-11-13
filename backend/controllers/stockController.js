const stocksRouter = require('express').Router()
const Stocks = require('../models/Stocks')

stocksRouter.get('/', (request, response) => {
    Stocks.find({}).then(stocks => {
      response.json(stocks.map(a => a.toJSON()))
    })
  })
  stocksRouter.get('/:id', (request, response) => {
    Stocks.findById(request.params.id)
      .then(a => {
        if (a) {
          response.json(a.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch(error => {console.log(error)})
  })
module.exports = stocksRouter