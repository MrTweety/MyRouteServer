module.exports = getUserByLoginAndPassword = (req, res) => {
  res.json({
    name: res.userDetails.name,
    login: res.userDetails.login,
    _id: res.userDetails._id,
    avatar: res.userDetails.avatar,
    mail: res.userDetails.mail,
    followed: res.userDetails.followed,
    followers: res.userDetails.followers,
    token: res.token
  });
};
