module.exports = deleteCommentById = async (req, res) => {
  try {
    await res.comment.remove();
    res.status(200).json({ message: "Deleted Comment" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
