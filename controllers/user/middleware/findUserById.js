const { User } = require("../../../models/user");

module.exports = findUserById = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Cannot find user by Id" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.status(200).userById = user;
  next();
};
