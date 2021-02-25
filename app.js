//nesting of events is also possible, you can emit one event inside the other --- You can create Event Loops also 

//events is a module in node
const EventEmitter = require('events');
var events = require('events');

//then we will eventemitter object of events -- initialising
var eventsEmitter = new events.EventEmitter();

var myHandler = function(){
    console.log("Hello world")
    eventsEmitter.emit('event2')
}

var myHandler2 = function(){
    console.log("Life is Awesome !!")
}

eventsEmitter.on('event1',myHandler);
eventsEmitter.on('event2',myHandler2);

//to run this above you need to emit the eventHandler
eventsEmitter.emit('event1')

// You can directly pass a function also inside the event emitter

eventsEmitter.on('event3',function(){
    console.log("Direct Function defining")
})
eventsEmitter.emit('event3')

//You can pass arguments also inside a function
eventsEmitter.on('event4',function(msg){
    console.log(msg)
})
eventsEmitter.emit('event4','Wohooooo !!')

// Tip:- if you want to fire any event only once, use once function instead of on function 

//Event is an indication in our application that something has happened

class Person extends EventEmitter{
    constructor(name)
    {
        super();
        this._name = name;
    }

    get name()
    {
        return this._name;
    }
}

let pedro = new Person('Pedro');
//Person extends events emitter, so Pedro is also an object of the eventsemitter class, so you will have to add a listener to it :-

pedro.on('name',()=>{
    console.log('my name is :- '+pedro.name);
})

pedro.emit('name');

//Note: emit functions are synchronous