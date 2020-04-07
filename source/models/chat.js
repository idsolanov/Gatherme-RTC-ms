'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema= Schema({
    
    nickName1:{
        type: String,
        lowercase:true
    },
    nickName2:{
        type:String,
        lowercase:true

    },
    creationDate: {
        type:Date,
        default: Date.now()
    }
})

module.exports=mongoose.model('chats',ChatSchema)