module.exports = followUserById = async (req, res) => {
  try {
    /******************[ WIP ]*******************
     * TODO:
     *  Transaction ??
     *  id=id
     */
    res.user.followed.addToSet(res.userById._id);
    res.userById.followers.addToSet(res.user._id);

    const user = await res.user.save();
    const userById = await res.userById.save();
    res.status(200).json({
      followed: user.followed,
      followers: user.followers
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
