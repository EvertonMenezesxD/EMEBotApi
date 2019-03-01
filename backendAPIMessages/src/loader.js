const server = require('./config/server');
require('./config/database')
require('./config/message_routes')(server)