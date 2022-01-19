const users = require("./usersPaths");
const routes = require("./routesPaths");

module.exports = {
  paths: {
    ...users.paths,
    ...routes.paths
  }
};
