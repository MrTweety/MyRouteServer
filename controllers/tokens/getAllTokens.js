const { Tokens } = require("../../models/tokens");
module.exports = getAllTokens = async (req, res) => {
  try {
    const tokens = await Tokens.find();
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
