const express = require("express");
const router = express.Router();
const { Routes } = require("../models/routes");

const getRoute = async (req, res, next) => {
  console.log("MG-log: getRoute -> req.params.id)", req.params.id);
  try {
    route = await Routes.findById(req.params.id);
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
    const routes = await Routes.find();
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

module.exports = router;
