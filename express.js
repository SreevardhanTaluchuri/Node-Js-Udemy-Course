const express = require("express");
const http = require("http");

const app = express();

app.use((req, res, next) => {
  console.log("In first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In second middleware");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server is Up and Listening");
});
