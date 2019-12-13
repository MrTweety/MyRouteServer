const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date
    // default: Date.now
  }
});

const User = mongoose.model("User", userSchema);
module.exports = {
  User
};
