const { User } = require("../../../models/user");

module.exports = findUserByJwt = async (req, res, next) => {
  let user;
  try {
    const userId = req.jwtUser._id;
    user = await User.findById(userId);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user jwt" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(200).user = user;
  next();
};
