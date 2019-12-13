const { deleteToken } = require("../tokens/tokenUtils");

module.exports = userLogOut = async (req, res) => {
  try {
    const response = await deleteToken(req.body.token);
    if (response) {
      res.status(200).json({ message: "User log out" });
    } else {
      res.status(500).json({ message: "Error during logging out" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
