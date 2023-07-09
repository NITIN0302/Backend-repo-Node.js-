const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('response',() =>{
    console.log("Hello there");
})

customEvent.emit('response')