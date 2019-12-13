const { Routes } = require("../../models/routes");

module.exports = createRoute = async (req, res) => {
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
};
