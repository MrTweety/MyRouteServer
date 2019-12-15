const { User } = require("../../models/user");

module.exports = getBasicUserById = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  const basicUserInfo = {
    name: user.name,
    login: user.login,
    _id: user._id,
    avatar: user.avatar
  };
  return res.status(200).json(basicUserInfo);
};
