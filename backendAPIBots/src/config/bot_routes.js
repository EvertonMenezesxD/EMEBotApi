const express = require('express')

module.exports = function(server){

    //API Routes
    const router = express.Router()
    server.use('/', router)

    //Bot Routes
    const botService = require('../api/bot/botService')
    botService.register(router,'/bots')
}