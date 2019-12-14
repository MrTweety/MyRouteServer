const { Comment } = require("../../models/comment");

module.exports = getCommentsByRouteId = async (req, res) => {
  try {
    const comment = await Comment.find({ route: req.params.id }).populate({
      path: "author",
      select: ["_id", "name", "avatar"]
    });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
