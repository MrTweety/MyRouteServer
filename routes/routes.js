const express = require("express");
const router = express.Router();

const getRoute = require("../controllers/routes/middleware/getRoute");

const getAllRoutes = require("../controllers/routes/getAllRoutes");
const getRouteById = require("../controllers/routes/getRouteById");
const createRoute = require("../controllers/routes/createRoute");
const deleteRouteById = require("../controllers/routes/deleteRouteById");
const updateRouteById = require("../controllers/routes/updateRouteById");

router
  .get("/", getAllRoutes)
  .get("/:id", getRoute, getRouteById)
  .post("/", createRoute)
  .delete("/:id", getRoute, deleteRouteById)
  .put("/:id", getRoute, updateRouteById);
module.exports = router;
