const { Comment } = require("../../models/comment");

module.exports = createComment = async (req, res) => {
  const comment = new Comment({
    author: "5de174842f776c6e9287b1c6",
    comment: req.body.comment,
    parens: req.body.parens,
    route: req.params.id
  });

  try {
    const newComment = await comment.save();
    res.route.comments.push(newComment);
    const updateRoute = await res.route.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
