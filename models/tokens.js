const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tokensSchema = new Schema({
  token: {
    type: String,
    required: true
  }
});

const Tokens = mongoose.model("Tokens", tokensSchema);
module.exports = {
  Tokens
};
