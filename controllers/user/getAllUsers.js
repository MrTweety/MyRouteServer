const { User } = require("../../models/user");

module.exports = getAllUsers = async (req, res) => {
  const { offset, limit } = req.query;

  try {
    const users = await User.find()
      .skip(offset)
      .limit(limit);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
