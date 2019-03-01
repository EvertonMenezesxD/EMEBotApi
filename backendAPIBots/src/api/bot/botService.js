const Bot = require('./bot_api')

Bot.methods(['get','post','put','delete'])
Bot.updateOptions({ new: true, runValidators: true })

module.exports = Bot