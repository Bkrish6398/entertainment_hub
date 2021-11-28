const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SignUp = new Schema({
  fName: {
    type: String,
  },
  lName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    default: "SD",
  },
});

module.exports = SignUpUser = mongoose.model("userCred", SignUp);
