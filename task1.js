//Login,logout,profileUpdate,purchase
// create four customer Event
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


const eventCount={
   "login":0,
    "logout":0,
    "profileUpdate":0,
    "purchase":0
}
eventEmitter.on('login',( user)=>{
    console.log(`User ${user} has logged in.`);
    eventCount.login+=1;
});


eventEmitter.on('logout',( user)=>{
    console.log(`User ${user} has logged out.`);
    eventCount.logout+=1;
});

eventEmitter.on('profileUpdate',( user)=>{
    console.log(`User ${user} has updated their profile.`);
    eventCount.profileUpdate+=1;
});

eventEmitter.on('purchase',( user)=>{
    console.log(`User ${user} has made a purchase.`);
    eventCount.purchase+=1;
});

// Emitting events
eventEmitter.emit('login', 'Alice');
eventEmitter.emit('profileUpdate', 'Alice');
eventEmitter.emit('purchase', 'Alice');
eventEmitter.emit('logout', 'Alice');


eventEmitter.emit('login', 'Bob');
eventEmitter.emit('purchase', 'Bob');
eventEmitter.emit('logout', 'Bob');

console.log("Event counts:", eventCount);


