const http = require("http");
const events = require("events");
const port = 7000;
const myEmitter = new events.EventEmitter();
myEmitter.on("ping", (data) => {
  console.log("First Event: " + data);
});
myEmitter.emit("ping", "First event trigger");
const server = http.createServer((req, res) => {
  res.end("My Server is Running Properly");
});
server.listen(port, () => {
  console.log("Server is running");
});