require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const stocksRouter = require('./controllers/stockController')
const userRouter = require('./controllers/userController')
const loginRouter = require('./controllers/loginController')
const messageRouter = require('./controllers/messageController')
const logoRouter = require('./controllers/logoController')
const indexRouter = require('./controllers/indexController.js')
const priceRouter = require('./controllers/priceController.js')
const cors = require('cors')
const updateStocks = require('./StockFetcher.js')
const Stocks = require('./models/Stocks')
const app = express()

mongoose.connect(`mongodb+srv://jhalah:${process.env.DBPASSWORD}@cluster0.ka30p.mongodb.net/Stocks?retryWrites=true&w=majority`)
.then(result => {
    console.log('connected to MongoDB --Stocks')
})
.catch((error) => {
console.log('error connecting to MongoDB --stocks:', error.message)
})
app.use(express.json())
app.use(cors())
app.use('/api/stocks',stocksRouter)
app.use('/api/users',userRouter)
app.use('/api/login', loginRouter)
app.use('/api/messages', messageRouter)
app.use('/api/logos', logoRouter)
app.use('/api/index', indexRouter)
app.use('/api/prices', priceRouter)

//this section updates basic financial information for all stocks every 25 hours.
setInterval(() => {
      console.log("Starting to update Stocks")
      updateStocks().then(() => {console.log("Stocks updated")})
},90000000)


module.exports = app