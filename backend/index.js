const express = require("express");
const socketIo = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

console.log(io)

server.listen(3000,()=>{
  console.log("server listening to port-3000")
})