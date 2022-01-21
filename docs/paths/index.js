const users = require("./usersPaths");
const routes = require("./routesPaths");
const comment = require("./commentPaths");

module.exports = {
  paths: {
    ...users.paths,
    ...routes.paths,
    ...comment.paths
  }
};
