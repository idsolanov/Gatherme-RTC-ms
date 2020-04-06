'use strict'
const Chat = require('../models/chat')


function getChatbyEmail1andEmail2(req,res){

    let Email_1 = req.body.email_1
    let Email_2 = req.body.email_2

    Chat.findOne({email_1:Email_1,email_2:Email_2},(err,chat)=>{

        if(err) return res.status(500).send({message:'error en la peticion'})
        if(!chat) return res.status(404).send({message:'no existen usuarios'})
        res.status(200).send({chat})
    })
}

function createChat(req,res){

    let chat = new Acount()
    chat.email_1=req.body.email_1
    chat.email_2=req.body.email_2

    chat.save((err,chatStrored) =>{
        if(err) res.status(500).send({message: `error al salvar en la base de datos: ${err}`})

        res.status(200).send({account: chatStrored})
    })
}

function deleteChat(req,res){
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
    getChatbyEmail1andEmail2,
    createChat,
    deleteChat
}