const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')){
    return authorization.substring(7)
  }
  return null
}

usersRouter.post('/', async (request, response) => {
    const body = request.body
    console.log(body)
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      passwordHash,
    })
  
    try{const savedUser = await user.save(); response.json(savedUser)}
    catch(error){(response.status(400).json({error: error}))}
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
    const token = getTokenFrom(request)
    if (!token) {
        return response.status(401).json({ error: 'token missing' })
    }
    let decodedToken
    try{decodedToken = jwt.verify(token, process.env.TOKENCRYPT)}
    catch(error){console.log("token invalid"); return response.status(401).json({ error: 'token invalid' })}
    if(decodedToken.id !== request.params.id) return response.status(401).json({ error: 'Cannot modify other users stocklists'})
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