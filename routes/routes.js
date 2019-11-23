const express = require("express");
const router = express.Router();

const { Routes, Comment } = require("../models/routes");

const getRoute = async (req, res, next) => {
  console.log("getRoute -> req.params.id:", req.params.id);
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
//Get all
router.get("/", async (req, res) => {
  try {
    const routes = await Routes.find().populate({
      path: "comments",
      populate: { path: "author" }
    });
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get One
router.get("/:id", getRoute, (req, res) => {
  res.send(res.route);
});

//Create One
router.post("/", async (req, res) => {
  const route = new Routes({
    name: req.body.name,
    startDate: req.body.startDate,
    startDate: req.body.startDate,
    coords: req.body.coords
  });
  try {
    const newRoute = await route.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete One
router.delete("/:id", getRoute, async (req, res) => {
  try {
    await res.route.remove();
    /*
     * TODO: delete comments
     * Comment.deleteMany({ _id: { $in: [10, 2, 3, 5]}}, function(err) {})
     */
    res.json({ message: "Deleted Route" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update One
router.put("/:id", getRoute, async (req, res) => {
  if (req.body.name != null) {
    res.route.name = req.body.name;
  }
  try {
    const updateRoute = await res.route.save();
    res.json({ _id: updateRoute._id, name: updateRoute.name });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Create One Commenst
router.post("/comment/:id", getRoute, async (req, res) => {
  const comment = new Comment({
    author: "5dd9081d1c9d440000010d65",
    comment: "com 35dd9081d1c9d440000010d65 <3 :P elo elo :P ",
    parens: "5dd9108f58f67a1ac87af158"
  });

  try {
    const newComment = await comment.save();
    console.log("MG-log: newComment", newComment);
    res.route.comments.push(newComment);
    const updateRoute = await res.route.save();
    res.status(201).json(updateRoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
