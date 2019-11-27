module.exports = updateRouteById = async (req, res) => {
  if (req.body.name != null) {
    res.route.name = req.body.name;
  }
  try {
    const updateRoute = await res.route.save();
    res.json({ _id: updateRoute._id, name: updateRoute.name });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
