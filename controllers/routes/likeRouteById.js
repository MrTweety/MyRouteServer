module.exports = likeRouteById = async (req, res) => {
  try {
    if (!req.jwtUser._id) {
      throw new Error("Missing userId");
    }
    res.route.likes.addToSet(req.jwtUser._id);

    const updateRoute = await res.route.save();
    res.status(200).json({ _id: updateRoute._id, likes: updateRoute.likes });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
