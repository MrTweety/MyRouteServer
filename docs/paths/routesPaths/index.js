const allRoutes = require("./allRoutes");
const getRouteById = require("./getRouteById");
const getRoutesByUserId = require("./getRoutesByUserId");
const createRoute = require("./createRoute");
const deleteRouteById = require("./deleteRouteById");
const updateRouteById = require("./updateRouteById");
const likeRouteById = require("./likeRouteById");
const dislikeRouteById = require("./dislikeRouteById");
const findFollowedUserRoute = require("./findFollowedUserRoute");
const findNotFollowedUserRoute = require("./findNotFollowedUserRoute");

module.exports = {
  paths: {
    "/routes": { ...allRoutes, ...createRoute },
    "/routes/{id}": { ...getRouteById, ...deleteRouteById, ...updateRouteById },
    "/routes/userRoutes/{id}": { ...getRoutesByUserId },
    "/routes/like/{id}": { ...likeRouteById },
    "/routes/dislike/{id}": { ...dislikeRouteById },
    "/routes/home": { ...findFollowedUserRoute },
    "/routes/discover": { ...findNotFollowedUserRoute }
  }
};
