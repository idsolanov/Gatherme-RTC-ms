'use strict'
const express = require('express')
const api = express.Router()
const chatCtrl = require('../controllers/chat')
const messageCtrl = require('../controllers/message')

api.post('/chat',chatCtrl.createChat)

module.exports = api