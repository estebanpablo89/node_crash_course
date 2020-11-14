const EventEmitter = require('events');

//create class
class MyEmitter extends EventEmitter {}

//Init object
const MyEmitter = new MyEmitter();

//Event listener
MyEmitter.on('event', () => console.log('Event fired'));

//Init event
MyEmitter.emit('event');
