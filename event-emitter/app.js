// on - listen for an event
// emit - emit an event

const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("data recieved");
});
customEmitter.on("response", () => {
  console.log("some other data");
});

customEmitter.emit("response");
