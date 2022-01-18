module.exports = followUserById = async (req, res) => {
  try {
    /******************[ WIP ]*******************
     * TODO:
     *  Transaction ??
     *  id=id
     */
    if (res.userById._id.equals(res.user._id)) {
      return res.status(400).json({ message: "Cannot follow yourself" });
    }
    res.user.followed.pull(res.userById._id);
    res.userById.followers.pull(res.user._id);

    const user = await res.user.save();
    const userById = await res.userById.save();
    res.status(200).json({
      followed: user.followed,
      followers: user.followers
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
