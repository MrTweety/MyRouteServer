const { Comment } = require("../../models/comment");

module.exports = getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find();
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
