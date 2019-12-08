const { User } = require("../../../models/user");

module.exports = getUser = async (req, res, next) => {
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(200).user = user;
  next();
};
