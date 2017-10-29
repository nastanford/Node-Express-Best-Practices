// ///////////////////////////
// Load the Required Modules
// ///////////////////////////
// Express a Webserver plugin
var express = require('express');
// Reload will auto reload your site.
var reload = require('reload');
// App the Express Webserver
var app = express();
// The data for the example file
var dataFile = require('./models/data.json');
// Socket.io used for direct socket access like a Chat
var io = require('socket.io')();

// ///////////////////////////
// Allow Enviroment PORT Variable default to 3000
// ///////////////////////////
app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// ///////////////////////////
// Set some Global Variables
// ///////////////////////////
app.locals.siteTitle = 'Example App';
app.locals.allSpeakers = dataFile.speakers;

// ///////////////////////////
// Controllers or Routes
// ///////////////////////////
app.use(express.static('app/public'));
app.use(require('./controllers/index'));
app.use(require('./controllers/speakers'));
app.use(require('./controllers/feedback'));
app.use(require('./controllers/api'));
app.use(require('./controllers/chat'));

// ///////////////////////////
// Setup Server to start listening.
// ///////////////////////////
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


// ///////////////////////////
// Socket.io Information.
// ///////////////////////////
io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});


reload(server, app);
