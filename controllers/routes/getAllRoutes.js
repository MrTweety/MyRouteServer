const { Routes } = require("../../models/routes");

module.exports = getAllRoutes = async (req, res) => {
  try {
    const routes = await Routes.find()
      .populate({
        path: "comments",
        populate: { path: "author" }
      })
      .populate({
        path: "routeAuthor",
        select: ["_id", "name", "avatar"]
      });
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
