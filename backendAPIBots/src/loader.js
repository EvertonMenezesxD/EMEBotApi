const server = require('./config/server');
require('./config/database')
require('./config/bot_routes')(server)