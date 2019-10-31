const EventEmitter = require("events");

// create a class
class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter();

// event listener
myEmitter.on("event", () => console.log("Event fired!"));
