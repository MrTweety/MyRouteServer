const { Routes } = require("../../models/routes");
const {
  getAverageFromPoints,
  arePointsEqual
} = require("../../common/getAvarageFromPoints");
const { distanceBetweenPoints } = require("../../common/distanceBetweenPoints");

const MIN_DISTANCE = 500;

module.exports = getHeatMap = async (req, res) => {
  try {
    const routes = await Routes.find().populate({
      path: "comments",
      populate: { path: "author" }
    });

    var avaragePoints = [];
    var returnPointsArray = [];

    routes.map(({ coords }) => {
      avaragePoints.push(getAverageFromPoints(coords));
    });

    console.log("\n\n");

    var tmpPointsArray = [];

    avaragePoints.map(point1 => {
      var array = [point1];
      avaragePoints.map(point2 => {
        if (!arePointsEqual(point1, point2)) {
          var distance = distanceBetweenPoints(point1, point2);
          if (distance < MIN_DISTANCE) {
            array.push(point2);
          }
        }
      });
      tmpPointsArray.push(array);
    });

    console.log(tmpPointsArray);

    tmpPointsArray.map(array => {
      if (array.length > 1) {
        var newPoint = getAverageFromPoints(array);
        newPoint.weight = array.length;
        returnPointsArray.push(newPoint);
      } else {
        returnPointsArray.push(array[0]);
      }
    });

    returnPointsArray = returnPointsArray.filter(
      (thing, index, self) =>
        index ===
        self.findIndex(
          t => t.latitude === thing.latitude && t.longitude === thing.longitude
        )
    );

    console.log(avaragePoints);

    res.json(avaragePoints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
