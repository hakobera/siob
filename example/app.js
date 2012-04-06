var io = require('socket.io').listen(process.env.PORT || 3000);

io.configure('production', function() {
  io.enable('browser client minification');  // send minified client
  io.enable('browser client etag');          // apply etag caching logic based on version number
  io.enable('browser client gzip');          // gzip the file
  io.set('log level', 1);                    // reduce logging
  io.set('transports', [                     // enable all transports (optional if you want flashsocket)
    'websocket'
  ]);
});

io.sockets.on('connection', function (socket) {
  socket.on('echo', function (data) {
    socket.broadcast.emit('echo', data);
  });
});
