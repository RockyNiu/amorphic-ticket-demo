var history = require('connect-history-api-fallback');

require('amorphic').listen(__dirname, null, function(app) {
    app.use(history({
        verbose: true,
        logger: console.log.bind(console)
    }))
});

// require('amorphic').listen(__dirname);
