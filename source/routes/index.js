'use strict'
const express = require('express')
const api = express.Router()
const chatCtrl = require('../controllers/chat')
const messageCtrl = require('../controllers/message')

api.post('/chat',chatCtrl.createChat)
api.get('/chat',chatCtrl.getChatbyId)
api.get('/chats',chatCtrl.getChatsbynickName)
api.delete('/chat',chatCtrl.deleteChatbyId)

api.post('/message',messageCtrl.createMessage)
api.get('/messages',messageCtrl.getMessagesbyChat)
api.get('/message',messageCtrl.getMessagebyId)
api.delete('/message',messageCtrl.deleteMessagebyId)


module.exports = api