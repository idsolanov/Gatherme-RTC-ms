'use strict'
const Message = require('../models/message')


function getMessagesbyChat(req,res){

    let chatid = req.body.chatId

    Message.find({chatId:chatid},(err,messages)=>{
        if (err) return res.status(500).send({message: 'error al realizar la peticion'})
        if(!account) return res.status(404).send({message:'no hay mensajes'})

        res.status(200).send({messages})
    })
}

function getMessagesbyOwner(req,res){

    let Owner = req.body.owner

    Message.find({owner:Owner},(err,messages)=>{

        if(err) return res.status(500).send({message:'error en la peticion'})
        if(!messages) return res.status(404).send({message:'no hay mensajes'})
        res.status(200).send({messages})
    })
}

function getMessagebyOwnerandChat(req,res){
    let Owner = req.body.owner
    let ChatId = req.body.ChatId

    Message.find({owner:Owner,chatId:ChatId},(err,messages)=>{
        if(err) return res.status(200).send({message:`error en el servidor: ${err}`})
        if(!messages) return res.status(200).send({message:`no hay mensajes`})

        res.status(200).send({messages})
    })
}

function sendMessage(req,res){
    console.log(req.body)

    let message = new Message()
    message.owner = req.body.owner
    message.message=req.body.message
    message.chatId= req.body.chatId

    message.save((err,messageStrored) =>{
        if(err) res.status(500).send({message: `error al salvar en la base de datos: ${err}`})

        res.status(200).send({message: messageStrored})
    })
}

function deleteMessage(req,res){

    let messageId = req.body._id

    Message.findById(messageId,(err,message)=>{
        if(err) return res.status(500).send({message:'error al conectar con el servidor'})
        if(!message) return res.status(404).send({message:'el mensaje no existe'})

        message.remove(err=>{
            if(err) return res.status(500).send({message:'error al borrar el mensaje'})

            res.status(200).send({message:'mensaje eliminado correctamente'})
            
        })
    })
}

module.exports={
    getMessagesbyChat,
    getMessagesbyOwner,
    getMessagebyOwnerandChat,
    sendMessage,
    deleteMessage
}