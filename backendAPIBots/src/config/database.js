const mongoose = require('mongoose');
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/bot_db',{ useNewUrlParser: true })