const express = require("express");
const router = express.Router();

const getRoute = require("../controllers/routes/middleware/getRoute");

const getAllRoutes = require("../controllers/routes/getAllRoutes");
const getRouteById = require("../controllers/routes/getRouteById");
const createRoute = require("../controllers/routes/createRoute");
const deleteRouteById = require("../controllers/routes/deleteRouteById");
const updateRouteById = require("../controllers/routes/updateRouteById");
const getHeatMap = require("../controllers/routes/getHeatMap");

createRoute;

const { Comment } = require("../models/routes");

router
  .get("/", getAllRoutes)
  .get("/heatMap", getHeatMap)
  .get("/:id", getRoute, getRouteById)
  .post("/", createRoute)
  .delete("/:id", getRoute, deleteRouteById)
  .put("/:id", getRoute, updateRouteById);

//******************************************************************//
//************************** WORK IN PROGRESS***********************//
//******************************************************************//

//Create One Commenst
router.post("/comment/:id", getRoute, async (req, res) => {
  const comment = new Comment({
    author: "5dd9081d1c9d440000010d65",
    comment: "com 35dd9081d1c9d440000010d65 <3 :P elo elo :P ",
    parens: "5dd9108f58f67a1ac87af158"
  });

  try {
    const newComment = await comment.save();
    res.route.comments.push(newComment);
    const updateRoute = await res.route.save();
    res.status(201).json(updateRoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
