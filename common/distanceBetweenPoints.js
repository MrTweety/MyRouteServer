const distanceBetweenPoints = (point1, point2) => {
  var R = 6371e3; // metres
  var a1 = (point1.latitude * Math.PI) / 180;
  var a2 = (point2.latitude * Math.PI) / 180;
  var da = ((point2.latitude - point1.latitude) * Math.PI) / 180;
  var dl = ((point2.longitude - point1.longitude) * Math.PI) / 180;

  var a =
    Math.sin(da / 2) * Math.sin(da / 2) +
    Math.cos(a1) * Math.cos(a2) * Math.sin(dl / 2) * Math.sin(dl / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return Math.floor(R * c);
};

module.exports.distanceBetweenPoints = distanceBetweenPoints;
