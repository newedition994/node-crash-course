const EventEmitter = require("events");

const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    this.emit("message", { id: uuid.v4(), msg });
  }
}

// module.exports = Logger;

logger.on("message", data => console.log("Called Listener: ", data));

logger.log("Hello World");
logger.log("Hi");
logger.log("Hello");
