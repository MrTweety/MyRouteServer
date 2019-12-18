const { Routes } = require("../../models/routes");

module.exports = createRoute = async (req, res) => {
  const route = new Routes({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    routeAuthor: req.body.routeAuthor,
    coords: req.body.coords,
    distance: req.body.distance,
    timerDuration: req.body.timerDuration
  });
  try {
    const newRoute = await route.save();
    res.status(201).json(newRoute);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
