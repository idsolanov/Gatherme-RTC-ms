'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema= Schema({
    
    email_1:{
        type: String,
        lowercase:true
    },
    email_2:{
        type:String,
        lowercase:true

    },
    creationDate:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('chats',ChatSchema)