const bcrypt = require('bcrypt')
const user = require('../models/user')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
    const body = request.body
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.json(savedUser)
  })


  usersRouter.get('/', (request, response) => {
    User.find({}).populate('followedStocks')
    .then(users => {
      response.json(users.map(a => a.toJSON()))
    })
  })

  usersRouter.get('/:id', (request, response) => {
    User.findById(request.params.id).populate('followedStocks',{_id: 1, Name: 1, Symbol: 1})
      .then(a => {
        if (a) {
          response.json(a.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch(error => {console.log(error)})
  })

  usersRouter.put('/:id', (request, response, next) => {
    const body = request.body
  
    const user = {
      followedStocks: body.followedStocks
    }
  
    User.findByIdAndUpdate(request.params.id, user, { new: true })
      .then(updatedUser => {
        response.json(updatedUser)
      })
      .catch(error => {console.log(error)})
  })

  module.exports = usersRouter