const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Homepage 2");
});

module.exports = router;
