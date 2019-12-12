const { Tokens } = require("../../models/tokens");
const { isTokenInDataBase } = require("./tokenUtils");
module.exports = getAllTokens = async (req, res) => {
  try {
    const tokens = await Tokens.find();
    console.log(isTokenInDataBase("asdf"));
    res.status(200).json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
