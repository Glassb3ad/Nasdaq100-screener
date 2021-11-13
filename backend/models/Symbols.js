const mongoose = require('mongoose')

  const symbolSchema = new mongoose.Schema({
    symbol: String,
    name: String,
    sector: String,
    subSector: String,
    headQuarter: String,
    dateFirstAdded: String,
    cik: String,
    founded: String
  })

  /*symbolSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })*/

  module.exports =  mongoose.model("Symbol", symbolSchema)