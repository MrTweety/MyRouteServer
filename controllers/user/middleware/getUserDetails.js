const { User } = require("../../../models/user");
const { saveToken } = require("../../tokens/tokenUtils");
const jwtHandler = require("../../../common/authUtils");

module.exports = getUserDetails = async (req, res, next) => {
  let userDetails = [];
  console.log("MG-log: getUserDetails", req.body.login, req.body.password);
  if (!req.body.login || !req.body.password) {
    return res.status(401).json({
      message: "A username and password are required",
      logged: false
    });
  }
  try {
    userDetails = await User.findOne({
      login: req.body.login,
      password: req.body.password
    });

    console.log("getUserDetails", userDetails);

    if (!userDetails || userDetails.length === 0) {
      return res.status(401).json({
        message: "The username or password is incorrect",
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
    name: userDetails.name,
    login: userDetails.login,
    _id: userDetails._id,
    time: Date.now
  });

  saveToken(token);

  res.status(200).userDetails = userDetails;
  res.token = token;
  console.log("MG-log: getUserDetails2", userDetails, token);

  next();
};
