const express = require("express");

const routes = express.Router();

routes.get("/add-product", (req, res, next) => {
  console.log("Inside Add Product route");
  res.send(`
  <form action="/product" method="POST">
    <input type="text" name="Product">
    <button type="submit">Submit</button>
  </form>`);
});

routes.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = routes;
