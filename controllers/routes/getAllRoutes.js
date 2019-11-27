const { Routes } = require("../../models/routes");

module.exports = getRouteById = async (req, res) => {
  try {
    const routes = await Routes.find().populate({
      path: "comments",
      populate: { path: "author" }
    });
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
