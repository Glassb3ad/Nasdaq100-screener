const axios = require('axios')
const indexRouter = require('express').Router()
indexRouter.get('/', async (request, response) => {
    try{ 
     const result = await axios.get('https://financialmodelingprep.com/api/v3/historical-price-full/index/%5EXNDX?apikey=c3c50021c87bd311865047fd306d3f07')
     return response.status(200).json(result.data)
    }
    catch(error){response.status(404).json(error.message)}
})
module.exports = indexRouter