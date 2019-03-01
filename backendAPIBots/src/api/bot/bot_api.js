const restful = require('node-restful')

const mongoose = restful.mongoose

const BotSchema = new mongoose.Schema({
    name :{ type: String, required:true }
})

module.exports = restful.model('Bot', BotSchema);