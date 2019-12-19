const { Routes } = require("../../models/routes");

module.exports = findFollowedUserRoute = async (req, res) => {
  let routes;
  try {
    console.log("MG-log:aaa", req.user);

    routes = await Routes.find({
      routeAuthor: {
        $in: req.user.followed
      }
    })
      .populate({
        path: "comments",
        populate: { path: "author" }
      })
      .populate({
        path: "routeAuthor",
        select: ["_id", "name", "avatar"]
      });

    console.log(routes);
    if (routes == null) {
      return res.status(404).json({ message: "Cannot find user by Id" });
    }

    res.status(200).json(routes);
  } catch (error) {
    console.log("MG-log: error", error);
    return res.status(500).json({ message: error.message });
  }
};
