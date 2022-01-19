const { Routes } = require("../../models/routes");

module.exports = findNotFollowedUserRoute = async (req, res) => {
  const { offset, limit } = req.query;

  let routes;
  try {
    routes = await Routes.find({
      routeAuthor: {
        $nin: req.user.followed
      }
    })
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

    if (routes == null) {
      return res.status(400).json({ message: "Cannot find user by Id" });
    }

    res.status(200).json(routes);
  } catch (error) {
    console.log(
      "MG-log ~ file: findNotFollowedUserRoute.js ~ line 30 ~ module.exports=findNotFollowedUserRoute= ~ error",
      error
    );
    return res.status(500).json({ message: error.message });
  }
};
