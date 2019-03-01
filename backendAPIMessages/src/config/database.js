const mongoose = require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/message_db',{ useNewUrlParser: true })