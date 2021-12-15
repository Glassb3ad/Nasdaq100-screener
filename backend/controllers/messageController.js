const messageRouter = require('express').Router()
const User = require('../models/user')
const Message = require('../models/Message')
const jwt = require('jsonwebtoken')
const Stocks = require('../models/Stocks')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
      return authorization.substring(7)
    }
    return null
}

messageRouter.get('/', (request, response) => {
    Message.find({}).populate('commentedStock',{_id: 1, Name: 1, Symbol: 1}).populate('sender',{_id: 1, username: 1})
    .then(result => {
      response.json(result.map(a => a.toJSON()))
    })
})

messageRouter.post('/', async (request, response) => {
    const body = request.body
    if(!body.content || !body.commentedStock){
        return response.status(400).json({error: "missing content or commentedStock"})
    }
    const token = getTokenFrom(request)
    if (!token) {
        return response.status(401).json({ error: 'token missing' })
    }
    let decodedToken
    try{decodedToken = jwt.verify(token, "12eqeq234tr")}
    catch(error){return response.status(401).json({ error: 'token invalid' })}
    const user = await User.findById(decodedToken.id)
  
    const newMessage = new Message({
      content: body.content,
      commentedStock: body.commentedStock,
      date: new Date(),
      sender: user._id,
      senderName: user.username
    })
  
    const savedMessage = await newMessage.save()
    const commentedStock = await Stocks.findById(body.commentedStock) 
    if(commentedStock.Messages){
        commentedStock.Messages = commentedStock.Messages.concat(savedMessage._id)
    }
    else commentedStock.Messages = [savedMessage._id]
    await commentedStock.save()
  
    response.json(savedMessage.toJSON())
})

messageRouter.delete('/:id', async (request, response) => {
    message = await Message.findById(request.params.id)
    if(!message){return response.status(400).json({error: "no message found"})}
    const token = getTokenFrom(request)
    if (!token) {
        return response.status(401).json({ error: 'token missing' })
    }
    let decodedToken
    try{decodedToken = jwt.verify(token, "12eqeq234tr")}
    catch(error){return response.status(401).json({ error: 'token invalid' })}
    if(decodedToken.id == message.sender){
        console.log("here we are. This is message id: " + request.params.id)
        await Message.findByIdAndRemove(request.params.id)
        return response.status(200).json(message.toJSON())
    }
    else return response.status(401).json({ error: 'Cant remove messages from other users' })
    
})

module.exports = messageRouter
