const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    passwordHash: String,
    followedStocks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stock'
      }
    ],
    //messages (will be implemented later)
  })
  const uniqueValidator = require('mongoose-unique-validator')

  userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      delete returnedObject.passwordHash
    }
  })

  module.exports = mongoose.model('User', userSchema)