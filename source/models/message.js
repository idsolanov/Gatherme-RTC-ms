'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema= Schema({
    owner:{
        type:String,
        unique:true
    },
    message:{
        type:String
    },
    chatId: {
        type: String,
        unique:true
    }
})


module.exports = mongoose.model('messages',MessageSchema)