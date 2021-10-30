const mongoose = require('mongoose')

const password = 'Muuli33'
mongoose.connect(`mongodb+srv://jhalah:Muuli33@cluster0.ka30p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

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