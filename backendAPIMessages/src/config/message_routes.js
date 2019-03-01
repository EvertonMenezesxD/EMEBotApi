const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/', router)

    //Bot Routes
    const messageService = require('../api/message/messageService')
    messageService.register(router,'/messages')
}