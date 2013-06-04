var Hapi = require('hapi');


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

var generateHash = {
    handler: function () {
        this.reply.view('generator.html', {
            title: 'Subber: Stub generator',
            action: '/stub-generator'
        });
    }
};

// Define the routes.
module.exports = [
    {
        method: 'GET',
        path: '/stub-generator',
        config: generateHash
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
