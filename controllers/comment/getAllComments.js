const { Comment } = require("../../models/comment");

module.exports = getAllComments = async (req, res) => {
  const { offset, limit } = req.query;

  try {
    const comment = await Comment.find()
      .skip(offset)
      .limit(limit);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
