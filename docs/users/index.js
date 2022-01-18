const login = require("./login");
const logout = require("./logout");
const createUser = require("./createUser");
const allUsers = require("./allUsers");
const getCurrentUser = require("./getCurrentUser");
const getBasicUser = require("./getBasicUser");
const deleteCurrentUser = require("./deleteCurrentUser");
const followUserById = require("./followUserById");
const unfollowUserById = require("./unfollowUserById");

module.exports = {
  paths: {
    "/user/login": { ...login },
    "/user/logout": { ...logout },
    "/user/createUser": { ...createUser },
    "/user": { ...allUsers },
    "/user/getUser": { ...getCurrentUser },
    "/user/{id}": { ...getBasicUser },
    "/user/deleteUser": { ...deleteCurrentUser },
    "/user/follow/{id}": { ...followUserById },
    "/user/unfollow/{id}": { ...unfollowUserById }
  }
};
