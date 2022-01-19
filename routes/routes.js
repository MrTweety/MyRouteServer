const express = require("express");
const router = express.Router();

const { onlyDevAccess } = require("../middleware/utils");
const getRoute = require("../controllers/routes/middleware/getRoute");

const getAllRoutes = require("../controllers/routes/getAllRoutes");
const getRouteById = require("../controllers/routes/getRouteById");
const createRoute = require("../controllers/routes/createRoute");
const deleteRouteById = require("../controllers/routes/deleteRouteById");
const updateRouteById = require("../controllers/routes/updateRouteById");
const getHeatMap = require("../controllers/routes/getHeatMap");
const likeRouteById = require("../controllers/routes/likeRouteById");
const dislikeRouteById = require("../controllers/routes/dislikeRouteById");
const getRoutesByUserId = require("../controllers/routes/getRoutesByUserId");
const findFollowedUserRoute = require("../controllers/routes/findFollowedUserRoute");
const findNotFollowedUserRoute = require("../controllers/routes/findNotFollowedUserRoute");

// TODO: check user
router
  .get("/", onlyDevAccess, getAllRoutes)
  .get("/userRoutes/:id", getRoutesByUserId)
  .get("/home", findFollowedUserRoute)
  .get("/discover", findNotFollowedUserRoute)
  .get("/:id", getRoute, getRouteById) //TODO: // /route/:id
  .post("/", createRoute)
  .delete("/:id", onlyDevAccess, getRoute, deleteRouteById)
  .put("/:id", onlyDevAccess, getRoute, updateRouteById)
  .post("/like/:id", getRoute, likeRouteById)
  .post("/dislike/:id", getRoute, dislikeRouteById);

// router
//   .get("/heatMap", getHeatMap) // TODO: deprecated
//   .post("/home", findFollowedUserRoute) // TODO: deprecated -> get/home
//   .post("/search", findNotFollowedUserRoute); // TODO: deprecated -> get/discover

module.exports = router;
