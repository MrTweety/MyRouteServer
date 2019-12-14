const { User } = require("../../../models/user");
const { getUserIdFromToken } = require("../../../common/authUtils");

module.exports = getUser = async (req, res, next) => {
  let user;
  try {
    const userId = req.jwtUser._id;
    user = await User.findById(userId);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(200).user = {
    name: user.name,
    login: user.login,
    _id: user._id,
    avatar: user.avatar,
    mail: user.mail,
    token: req.jwtToken
  };
  next();
};
