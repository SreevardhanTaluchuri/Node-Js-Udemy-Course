const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In first middleware");
  next();
});

app.use((req, res, next) => {
  console.log("In second middleware");
  res.send("<h1>Hello From Express</h1>");
});

app.listen(3000, () => {
  console.log("Server is Up and Listening");
});
