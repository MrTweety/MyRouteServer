const getAverageFromPoints = points => {
  var sumX = 0.0;
  var sumY = 0.0;
  var sumZ = 0.0;
  var N = points.length;
  points.map(point => {
    let lat = (point.latitude * Math.PI) / 180;
    let lon = (point.longitude * Math.PI) / 180;

    sumX = sumX + Math.cos(lat) * Math.cos(lon);
    sumY = sumY + Math.cos(lat) * Math.sin(lon);
    sumZ = sumZ + Math.sin(lat);
  });

  sumX = sumX / N;
  sumY = sumY / N;
  sumZ = sumZ / N;

  var avgLon = Math.atan2(sumY, sumX);
  var Hyp = Math.sqrt(sumX * sumX + sumY * sumY);
  var avgLat = Math.atan2(sumZ, Hyp);

  return {
    longitude: (avgLon * 180) / Math.PI,
    latitude: (avgLat * 180) / Math.PI,
    weight: 1
  };
};

const arePointsEqual = (point1, point2) => {
  if (point1 === null || point2 == null) return true;
  return (
    point1.latitude === point2.latitude && point1.longitude === point2.longitude
  );
};

module.exports.getAverageFromPoints = getAverageFromPoints;
module.exports.arePointsEqual = arePointsEqual;
