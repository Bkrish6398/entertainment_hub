//Import packages
require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/endpoint");
const app = express();
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((resp) => console.log("Connected to MongoDB Atlas Cloud"))
  .catch((err) => console.log("MogoDB Error", err));

//express
app.use(express.json());
app.use("/", routes);

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
