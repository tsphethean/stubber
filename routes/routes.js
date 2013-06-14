var Hapi = require('hapi');
var crypto = require('crypto');

var serveStatics = {
    handler: function () {
        var response = new Hapi.response.File('./public/' + this.path);
        this.reply(response);
    }
};

var stubResponder = {
    handler: function () {
        // Create a sha1 hash of the request payload.
        var sha = crypto.createHash('sha1');
        sha.update(this.payload);
        var hash = sha.digest('hex');

        // Look for the file name matching hash of the incoming request.
        var file = './public/' + hash + '.xml';

        // Respond with the contents of the response file.
        this.reply(new Hapi.response.File(file));
    },
    payload: 'parse'
};


var generateHashRepsonse = {
    handler: function () {
        var sha = crypto.createHash('sha1');
        sha.update(this.payload);
        var hash = sha.digest('hex');
        this.reply(hash);
    },
    payload: 'parse'
};

// Define the routes.
module.exports = [
    {
        method: 'POST',
        path: '/stub-generator',
        config: generateHashRepsonse
    },
    {
        method: 'GET',
        path: '/{path*}',
        config: serveStatics
    },
    {
        method: 'POST',
        path: '/{path*}',
        config: stubResponder
    }
];
