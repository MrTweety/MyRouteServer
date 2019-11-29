const { User } = require("../../../models/user");

module.exports = getUserDetails = async (req, res, next) => {
  try {
    userDetails = await User.find({
      login: req.body.login,
      password: req.body.password
    });
    console.log(userDetails);
    if (userDetails.length === 0) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.userDetails = userDetails;
  next();
};
