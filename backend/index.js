const http = require('http')
const express = require ('express')
const axios = require('axios')
const mongoose = require('mongoose')

const Symbol = require('./Symbols.js')
const Stocks = require('./Stocks.js')

const app = express()

/*axios.get(`https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=c3c50021c87bd311865047fd306d3f07`)
      .then(response => {
             //console.log(response.data)
             Symbol.insertMany(response.data)
             .then(() => {console.log('Data added')})
             .catch(error => {console.log(error)})
          })*/
Symbol.find({})
  .then( async (result) => {
        //console.log(result)
        mongoose.connection.close() 
        let set = 0
        setInterval( async () => {
                  await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${result[set].symbol}&apikey=4DJ9VUC5XUKKZ9MW`)
                   .then(async (res) => {
                         console.log(res.data)
                        //await Stocks.save(res.data) 
                   })
                   set++
                   mongoose.connection.close()
        }, 15000)
        })
  .catch( error => {console.log(error)})


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)