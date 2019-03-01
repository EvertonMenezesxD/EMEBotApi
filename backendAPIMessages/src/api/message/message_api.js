const restful = require('node-restful')

const mongoose = restful.mongoose

const MessageSchema  = new mongoose.Schema({
    conversationId :{ type: String, required:true },
    timestamp : {type: Date, required: true, default: Date.UTC.now },
    from : { type: String, required:true, default: mongoose.Schema.Types.ObjectId },
    to : { type: String, required:true, default: mongoose.Schema.Types.ObjectId },
    text : { type: String}
})

module.exports = restful.model('Message', MessageSchema );