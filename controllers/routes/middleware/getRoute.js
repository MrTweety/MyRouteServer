const { Routes } = require("../../../models/routes");

module.exports = getRoute = async (req, res, next) => {
    try {
      route = await Routes.findById(req.params.id).populate({
        path: "comments",
        populate: { path: "author" }
      });
      if (route == null) {
        return res.status(404).json({ message: "Cannot find route" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  
    res.route = route;
    next();
  };