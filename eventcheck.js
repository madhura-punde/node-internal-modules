const EventEmitter = require('events');

//1. create an instance
const eventEmitter = new EventEmitter();

//2. Register an Event
eventEmitter.on('messageLogged',(str)=>{
    console.log('Listener called ',str);
})

eventEmitter.on('passMyObj',(obj)=>{
    console.log('Listener called ',obj);
})

//3. Raise an event
eventEmitter.emit('messageLogged', 'TV');

eventEmitter.emit('passMyObj', {id:1, url:'google.com', name:'ABC'});

// Only raising event will not do anything. It needs listener to listen to that event.
// Hence add listener


// Listener called  TV
// Listener called  { id: 1, url: 'google.com', name: 'ABC' }