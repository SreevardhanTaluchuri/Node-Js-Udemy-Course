const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  console.log("In first middleware");
  next();
});

app.use("/add-product", (req, res, next) => {
  console.log("Inside Add Product route");
  res.send(`
  <form action="/product" method="POST">
    <input type="text" name="Product">
    <button type="submit">Submit</button>
  </form>`);
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is Up and Listening");
});
