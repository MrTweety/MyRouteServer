module.exports = getUserById = (req, res) => {
  res.send({
    name: res.user.name,
    login: res.user.login,
    _id: res.user._id,
    avatar: res.user.avatar,
    mail: res.user.mail,
    followed: res.user.followed,
    followers: res.user.followers,
    token: req.jwtToken
  });
};
