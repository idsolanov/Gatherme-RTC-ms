'use strict'
const Chat = require('../models/chat')


function getChatbynicknames(req,res){

    let nickname1 = req.body.nickName1
    let nickname2 = req.body.nickName2

    Chat.findOne({nickName1:nickname1,nickName2:nickname2},(err,chat)=>{

        if(err) return res.status(500).send({message:`error en el servidro ${err}`})
        if(!chat) return res.status(404).send({message:'no existe el chat'})

        res.status(200).send({chat})
    })
}

function getChatsbynickName(req,res){
    let nickname = req.body.nickName
    let c1,c2
    Chat.find({nickName1:nickname},(err,chats1)=>{
        if(err) return res.status(500).send({message: `error en el servidor ${err}`})
        if(!chats1) return res.status(404).send({message: 'no se encontraron chats'})

        c1=chats1
    })
    Chat.find({nickName2:nickname},(err,chats2)=>{
        if(err) return res.status(500).send({message: `error en el servidor ${err}`})
        if(!chats2) return res.status(404).send({message: 'no se encontraron chats'})

        c2=chats2
    })
    if(!c1){
        if(!c2) res.status(200).send({c1,c2})
        res.status(200).send({c1})
    } 
}

function getChatbyId(req,res){
    let chatId= req.body._id

    Chat.findById(chatId,(err,chat)=>{
        if(err) return res.status(500).send({message: `error en el servidor ${err}`})
        if(!chat) return res.status(404).send({message: 'chat no encontrado'})

        res.status(200).send({chat})
    })
}

function createChat(req,res){

    let chat = new Chat()
    chat.nickName1=req.body.nickName1
    chat.nickName2=req.body.nickName2

    Chat.find({nickName1:req.body.nickName1,nickName2:req.body.nickName2},(err,chat)=>{
        if(err) return res.status(500).send({message: `error en el servidor ${err}`})
        if(chat)return res.status(500).send({message:'el chat ya existe'})

        chat.save((err,chatStrored) =>{
            if(err) res.status(500).send({message: `error al salvar en la base de datos: ${err}`})
    
            res.status(200).send({chatStrored})
        })
    })

    
}

function deleteChatbyId(req,res){
    let ChatId = req.bedy.ChatId
    Chat.findById(ChatId,(err,chat)=>{
        if(err) return res.status(500).send({message:'error al conectar con el servidor'})
        if(!chat) return res.status(404).send({message:'el chat no existe'})

        chat.remove(err=>{
            if(err) return res.status(500).send({message:'error al borrar el chat'})

            res.status(200).send({message:'chat eliminado correctamente'})
            
        })
    })
}

module.exports={
    getChatbyId,
    getChatbynicknames,
    getChatsbynickName,
    createChat,
    deleteChatbyId
    
}