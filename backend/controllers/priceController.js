const axios = require('axios')
const priceRouter = require('express').Router()

priceRouter.get('/', async (request, response) =>{
})

priceRouter.get("/:symbol",  async (request, response) => {
    let symbol = request.params.symbol
    try{
        const result = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=4DJ9VUC5XUKKZ9MW`)
        return response.status(200).json(result.data)

    }
    catch(error){
        console.log("nothing found")
        return response.status(404).json(error.message)
    }
})

module.exports = priceRouter
