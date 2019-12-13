const { Tokens } = require("../../models/tokens");
module.exports = deleteAllTokens = async (req, res) => {
  try {
    await Tokens.deleteMany({});
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
