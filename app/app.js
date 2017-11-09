// ///////////////////////////
// Load the Required Modules
// ///////////////////////////
// Express a Webserver plugin
var express = require('express');
// Reload will auto reload your site.
var reload = require('reload');
// App the Express Webserver
var app = express();

// ///////////////////////////
// Allow Enviroment PORT Variable default to 3000
// ///////////////////////////
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// ///////////////////////////
// Set some Global Variables
// ///////////////////////////
app.locals.siteTitle = 'NodeJS App';

// ///////////////////////////
// Controllers or Routes
// ///////////////////////////
app.use(express.static('app/public'));
app.use(require('./controllers/index'));
app.use(require('./controllers/example'));

// ///////////////////////////
// Setup Server to start listening.
// ///////////////////////////
var server = app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
