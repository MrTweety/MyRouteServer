const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  parens: { type: Schema.Types.ObjectId, ref: "Comment" },
  route: {
    type: Schema.Types.ObjectId,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  dataUpdate: {
    type: Date
  },
  comment: {
    type: String,
    required: true
  },
  previousVersions: [
    {
      type: String
    }
  ]
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment
};
