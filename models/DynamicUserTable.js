const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserScema = new Schema({
  name: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model("userList", UserScema);
