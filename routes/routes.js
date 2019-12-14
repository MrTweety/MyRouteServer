const express = require("express");
const router = express.Router();

const getRoute = require("../controllers/routes/middleware/getRoute");

const getAllRoutes = require("../controllers/routes/getAllRoutes");
const getRouteById = require("../controllers/routes/getRouteById");
const createRoute = require("../controllers/routes/createRoute");
const deleteRouteById = require("../controllers/routes/deleteRouteById");
const updateRouteById = require("../controllers/routes/updateRouteById");
const getHeatMap = require("../controllers/routes/getHeatMap");
const likeRouteById = require("../controllers/routes/likeRouteById");
const dislikeRouteById = require("../controllers/routes/dislikeRouteById");

router
  .get("/", getAllRoutes)
  .get("/heatMap", getHeatMap)
  .get("/:id", getRoute, getRouteById)
  .post("/", createRoute)
  .delete("/:id", getRoute, deleteRouteById)
  .put("/:id", getRoute, updateRouteById)
  .post("/like/:id", getRoute, likeRouteById)
  .post("/dislike/:id", getRoute, dislikeRouteById);

module.exports = router;
