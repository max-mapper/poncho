var WebSocketServer = require('ws').Server
var websocket = require('websocket-stream')
var duplexEmitter = require('duplex-emitter')
var http = require('http')
var path = require('path')

var server = http.createServer(function(req, res) { res.end() })
var wss = new WebSocketServer({server: server})
server.listen(8181)

wss.on('connection', function(conn) {
  var stream = websocket(conn)
  var authHandler = duplexEmitter(stream)

  authHandler.on('signUp', function(user, pass) {
    console.log('backend signUp', user, pass)
    // send signup success event back
    authHandler.emit('signup', user)
  })
})
