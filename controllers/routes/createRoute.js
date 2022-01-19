const { Routes } = require("../../models/routes");
const { catchAsync } = require("../../middleware/errors");

module.exports = createRoute = catchAsync(async (req, res) => {
  const photos = req.body.photos || [];

  photos.map(photo => {
    const index = req.body.coords.findIndex(
      point =>
        point.latitude === photo.latitude && point.longitude === photo.longitude
    );

    req.body.coords[index] = {
      ...req.body.coords[index],
      image: photo.photoBase64
    };
  });

  const route = new Routes({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    routeAuthor: req.body.routeAuthor || req.user._id,
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
});
