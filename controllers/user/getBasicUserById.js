const { User } = require("../../models/user");

module.exports = getBasicUserById = async (req, res) => {
  res.status(200).json({
    name: res.userById.name,
    login: res.userById.login,
    _id: res.userById._id,
    avatar: res.userById.avatar,
    mail: res.userById.mail,
    followed: res.userById.followed,
    followers: res.userById.followers
  });
};
