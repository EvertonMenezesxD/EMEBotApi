const Message = require('./message_api')

Message.methods(['get','post'])
Message.updateOptions({ new: true, runValidators: true })

module.exports = Message