const { Comment } = require("../../../models/comment");

module.exports = findComment = async (req, res, next) => {
  let comment;
  try {
    comment = await Comment.findById(req.params.id);
    if (comment == null) {
      return res.status(400).json({ message: "Cannot find comment" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.comment = comment;
  next();
};
