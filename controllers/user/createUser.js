const { User } = require("../../models/user");
const { saveToken } = require("../tokens/tokenUtils");
const jwtHandler = require("../../common/authUtils");

module.exports = createUser = async (req, res) => {
  try {
    userExists = await User.find({
      login: req.body.login,
      mail: req.body.mail
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  if (userExists.length !== 0) {
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
        id: user._id
      });

      user.token = token;

      saveToken(token);

      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};
