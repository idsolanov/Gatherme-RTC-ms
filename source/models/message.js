'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema= Schema({
    owner:{
        type:String
    },
    message:{
        type:String
    },
    chatId: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('messages',MessageSchema)