const mongoose = require("mongoose");

const subSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subToChanel: {
    type: String,
    required: true
  },
  subToData: {
    type: Date,
    required: true,
    default: Date.now
  }
});

module.exports = mongoose.model("sub", subSchema);
