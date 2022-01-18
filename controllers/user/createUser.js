const { User } = require("../../models/user");
const { saveToken } = require("../tokens/tokenUtils");
const jwtHandler = require("../../common/authUtils");

module.exports = createUser = async (req, res) => {
  let userExists;

  try {
    userExists = await User.findOne({
      $or: [{ login: req.body.login }, { mail: req.body.mail }]
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  if (!!userExists) {
    res.status(400).json({ message: "User already exists" });
  } else {
    const user = new User({
      name: req.body.name,
      login: req.body.login,
      mail: req.body.mail,
      password: req.body.password,
      avatar:
        "https://www.w3schools.com/howto/img_avatar.png?fbclid=IwAR3M84oA2sgO_zifUt4Ie4wXN9CMErW8hYQG0PHMPnpGIXRRpP4I_k7qtsA"
    });
    try {
      const token = jwtHandler.generateJWTToken({
        name: req.body.name,
        login: req.body.login,
        _id: user._id,
        time: Date.now
      });

      saveToken(token);

      const newUser = await user.save();
      res.status(201).json({
        name: newUser.name,
        login: newUser.login,
        _id: newUser._id,
        avatar: newUser.avatar,
        mail: newUser.mail,
        followed: newUser.followed,
        followers: newUser.followers,
        token: token
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
