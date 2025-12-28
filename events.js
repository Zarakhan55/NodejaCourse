// The Event module allows Node.js to respond to actions using event listeners and emitters.
// EventEmitter is a class used to create custom events.

// emit() is used to trigger (fire) an event.

// on() is used to listen to an event.

// once() listens to an event only one time.

// Events can pass data as parameters.

// off() removes a specific event listener.

// removeAllListeners() removes all listeners.

// The error event must be handled, otherwise the app crashes.







const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
// Create an event listener for 'greet' event
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to the Event Module.`);
});

// Emit the 'greet' event
eventEmitter.emit('greet', 'John Doe');

eventEmitter.once('sayGoodbye', (name) => {
    console.log(`Goodbye, ${name}! See you next time.`);
});

// Emit the 'sayGoodbye' event twice
eventEmitter.emit('sayGoodbye', 'John Doe');
eventEmitter.emit('sayGoodbye', 'John Doe'); // This will not trigger the listener


