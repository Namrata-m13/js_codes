let http = require('http');
let events=require('events');

var eventEmitter = new events.EventEmitter();

 let server= http.createServer(function(req, res){
     eventEmitter.emit('someone requested', 'John');
     res.end('Server Works!!');
 });

 
 eventEmitter.on('someone requested', function(data){
     console.log('A request has been made on the server',data);
 });

 server.listen(3000, 'localhost', function(){
     console.log('Server started on port:3000');
 })

