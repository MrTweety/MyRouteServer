module.exports = getCommentById = (req, res) => {
  res.status(200).send(res.comment);
};
