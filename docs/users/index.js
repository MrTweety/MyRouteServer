const login = require("./login");
const logout = require("./logout");
const createUser = require("./createUser");

module.exports = {
  paths: {
    "/user/login": {
      ...login
    },
    "/user/logout": {
      ...logout
    },
    "/user/createUser": {
      ...createUser
    }
    // "/user": {
    //   ...login,
    // },
  }
};
