//Import packages
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/endpoint");
const app = express();
const PORT = 5000;

//express
app.use("/", routes);
app.use(express.json());

//Server static asset if in production

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.PORT || PORT, () =>
  console.log("Listening to PORT: " + PORT)
);
