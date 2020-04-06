const express = require('express')
const bodyParser = require('body-parser')
const api = require('./source/routes')
const socketio = require('socket.io')
const app =  express()
const http = require('http')
const server = http.createServer(app)
socketio.listen(server)

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use('/',api)

module.exports=app