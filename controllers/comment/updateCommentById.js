module.exports = updateCommentById = async (req, res) => {
  if (!req.body.comment || req.body.comment === res.comment.comment) {
    res.status(200).json(res.comment);
  } else {
    res.comment.previousVersions.push(res.comment.comment);
    res.comment.comment = req.body.comment;
    res.comment.dataUpdate = new Date();
    try {
      const updateComment = await res.comment.save();
      res.status(200).json({ updateComment });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
