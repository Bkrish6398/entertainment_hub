const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("Homepage Updated");
});

module.exports = router;
