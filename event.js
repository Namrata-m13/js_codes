const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('loggedMessage',function(eventArg){
console.log('Event raised and listened', eventArg);
});

emitter.on('logging', function(args){
console.log('Message is', args);
});

emitter.emit('logging', {data: 'Hey, its me'});

emitter.emit('loggedMessage', {id : 1, url : 'https://'});


 