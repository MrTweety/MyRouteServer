const { User } = require("../../models/user");

module.exports = findUsers = async (req, res) => {
  let users;
  try {
    console.log(req.body.users);

    users = await User.find({
      _id: {
        $in: req.body.users
      }
    }).select({ name: 1, _id: 1, avatar: 1 });

    console.log(users);
    if (users == null) {
      return res.status(404).json({ message: "Cannot find user by Id" });
    }

    res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
