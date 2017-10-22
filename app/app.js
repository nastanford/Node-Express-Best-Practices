var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = require('./models/data.json');
var io = require('socket.io')();

app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Example App';
app.locals.allSpeakers = dataFile.speakers;

app.use(express.static('app/public'));
app.use(require('./controllers/index'));
app.use(require('./controllers/speakers'));
app.use(require('./controllers/feedback'));
app.use(require('./controllers/api'));
app.use(require('./controllers/chat'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});


io.attach(server);
io.on('connection', function(socket) {
  socket.on('postMessage', function(data) {
    io.emit('updateMessages', data);
  });
});


reload(server, app);
