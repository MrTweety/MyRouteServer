const { Routes } = require("../../models/routes");

module.exports = getRoutesByUserId = async (req, res) => {
  let route;
  const { offset, limit } = req.query;

  try {
    route = await Routes.find({ routeAuthor: req.params.id })
      .skip(offset)
      .limit(limit)
      .populate({
        path: "comments",
        populate: { path: "author" }
      })
      .populate({
        path: "routeAuthor",
        select: ["_id", "name", "avatar"]
      });
    if (route == null) {
      return res.status(400).json({ message: "Cannot find routes" });
    } else {
      return res.status(200).json(route);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
