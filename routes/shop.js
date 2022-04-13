const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("In first middleware");
  res.send(`
  <h1>Welcome to My shop</h1>
  `);
  next();
});

module.exports = router;
