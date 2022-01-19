const { Tokens } = require("../../models/tokens");
module.exports = getAllTokens = async (req, res) => {
  const { offset, limit } = req.query;

  try {
    const tokens = await Tokens.find()
      .skip(offset)
      .limit(limit);
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
