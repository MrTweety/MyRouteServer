const { User } = require("../../../models/user");
const { saveToken } = require("../../tokens/tokenUtils");
const jwtHandler = require("../../../common/authUtils");

module.exports = getUserDetails = async (req, res, next) => {
  let userDetails = [];

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

  const token = jwtHandler.generateJWTToken({
    name: userDetails[0].name,
    login: userDetails[0].login,
    _id: userDetails[0]._id,
    time: Date.now
  });

  saveToken(token);

  res.status(201).userDetails = {
    name: userDetails[0].name,
    login: userDetails[0].login,
    _id: userDetails[0]._id,
    avatar: userDetails[0].avatar,
    mail: userDetails[0].mail,
    token: token
  };
  next();
};
