var Hapi = require('hapi');
var crypto = require('crypto');
var routes = require('./routes/routes');

// Setup handlebar default options.
var options = {
    views: {
        path: 'templates',
        engines: {
            html: 'handlebars'
        }
    }
};

// Create a server with a host and port.
var server = Hapi.createServer('localhost', 8000, options);
server.addRoutes(routes);
server.start();


