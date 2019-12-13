const { User } = require("../../../models/user");
const { getUserIdFromToken } = require("../../../common/authUtils");

module.exports = getUser = async (req, res, next) => {
  try {
    const userId = getUserIdFromToken(req);
    user = await User.findById(userId);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(200).user = user;
  next();
};
