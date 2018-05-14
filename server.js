var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var log4js = require('log4js');
var logger = log4js.getLogger();

logger.level = 'debug';

app.get('/', function(req, res){
  res.sendFile(__dirname + '/server.html');
  //   res.send('<h1>Hello world</h1>');

});
app.get('/user', function(req, res){
  res.sendFile(__dirname + '/user.html');
});

io.on('connection', function(socket,req){
  logger.info('User connected');

  socket.on('AGENT_LOGGED', function(data){
    var agent = data.agent;
    var sessionID = data.sessionID;
    logger.info('Agent Logged '+agent+ " for sessionID "+sessionID);
    socket.emit('CHAT_MESSAGE', "ciao  L'agente è loggato");

  });

  socket.on('JOIN', function(data){
    logger.info('User Logged '+ data);

  });
  socket.on('USER_LOGGED', function(data){
    var user = data;
    logger.info('User Logged '+ user);
    //socket.emit('ON_USER_LOGGED', + user);
    socket.emit('CHAT_MESSAGE', "ciao bello questo è il mio messaggio");

  });


  socket.on('ADD_MESSAGE', function(msg){
    logger.debug('New Message ' + msg);
//   socket.to(room).emit('clientMessage', [name,data]);
  });

  socket.on('JOIN_ROOM', function(data){
    logger.debug('user join in the room'+data)
    socket.join(data);
  });

  // socket.on('NEW_MESSAGE', function(data,room, name){
  //   console.log('user join in the room'+data+room+name)
  //   socket.to(room).emit('clientMessage', [name,data]);
  // });

   socket.on('disconnect', function(){
    logger.info('user disconnected');
   });

});

http.listen(port, function(){
  logger.debug('listening on *:' + port + "Server Socket")
});
