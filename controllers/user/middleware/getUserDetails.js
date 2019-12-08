const { User } = require("../../../models/user");

module.exports = getUserDetails = async (req, res, next) => {
  if (req.body.login === "" || req.body.password === "") {
    return res.status(404).json({
      message: "Login fail",
      logged: false
    });
  }
  try {
    userDetails = await User.find({
      login: req.body.login,
      password: req.body.password
    });
    if (userDetails.length === 0) {
      return res.status(404).json({
        message: "Login fail",
        logged: false
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      logged: false
    });
  }

  res.status(201).userDetails = userDetails[0];
  next();
};
